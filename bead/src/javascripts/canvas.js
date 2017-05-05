export default class Canvas {
	constructor() {
    this.canvas = document.getElementById('canvas')
    this.cxt = canvas.getContext('2d')
    this.width = this.canvas.width = this.canvas.offsetWidth
    this.height = this.canvas.height = this.canvas.offsetHeight
    this.bounds = this.canvas.getBoundingClientRect()

    this.ball_count = 30       // 总个数
    this.line_range = 150     // 连线范围
    this.r_range = [5, 30]   // 半径范围
    this.color = [[188, 56, 23], [130, 5, 5]] // 颜色[[r, g, b], ..]
    this.period = [3, 8]  // 颜色呼吸周期
    this.opacity = [0.2, 0.8]   // 透明度范围
    this.speed = [-1, 1]    // 速度范围
    this.balls = []

    this.clickHandle = this.clickHandle.bind(this)
    this.bindEvent()
    this.start()
	}
  //  绑定事件
  bindEvent() {
    this.canvas.addEventListener('click', this.clickHandle, false)
  }
  //  移除事件
  unbindEvent() {
    this.canvas.removeEventListener('click', this.clickHandle, false)
  }
  //  点击获取鼠标位置
  clickHandle(e) {
    if (this.isAnimate) {
      return this.isAnimate = false
    }
    else {
      this.start()
    }
    let mx = e.clientX - this.bounds.left
    let my = e.clientY - this.bounds.top
    // this.addWork({ x: mx, y: my })
  }
  //  动画开始
  start() {
    if (this.isAnimate) {
      return false
    }

    for(var i = 0; i < this.ball_count; i++) {
      this.addBall()
    }

    this.isAnimate = true

    const step = () => {
      if (!this.isAnimate) return false
      this.render()
      this.update()
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
  //  得到颜色渐变数组
  getColorList(freq) {
    //  颜色差值[r, g, b]
    let ColorDis = [this.color[1][0] - this.color[0][0], this.color[1][1] - this.color[0][1], this.color[1][2] - this.color[0][2]]

    //  颜色差最大的绝对值
    let ColorLength = Math.max(Math.abs(ColorDis[0]), Math.abs(ColorDis[1]), Math.abs(ColorDis[2])) * freq

    //  颜色变化系数
    let ColorChange = ColorDis.map((c) => c / ColorLength)

    let ColorList = []

    for (let i = 0; i < ColorLength; i++) {
      ColorList.push(ColorChange.map((c, index) => (this.color[0][index] + c * i)))
    }

    return ColorList
  }
  //  增加一个球
  addBall() {
    let ball = {
      x: this.getRandomNumber([0, this.width]),
      y: this.getRandomNumber([0, this.height]),
      vx: this.getRandomNumber(this.speed),
      vy: this.getRandomNumber(this.speed),
      opacity: this.getRandomNumber(this.opacity),
      freq: this.getRandomNumber(this.period),
      type: ~~this.getRandomNumber([0, 3]),
      cur_i: 0,
      reverse: false
    }
    ball.r = (1 - ball.opacity) * (this.r_range[1] - this.r_range[0]) + this.r_range[0]
    ball.ColorList = this.getColorList(ball.freq)

    if (this.isOverlap(ball)) {
      return this.addBall()
    }

    let color = this.color[0]
    ball.color = [...color]

    //  随机一种模式[0:实心球, 1:圆环, 2:双环]
    switch(ball.type) {
      case 0: break;
      case 1: ball.empty = {
          r: this.getRandomNumber([ball.r / 2, ball.r / 4 * 3])
        }
        break;
      case 2: ball.empty = {
          r: this.getRandomNumber([ball.r / 2, ball.r / 4 * 3])
        }
        ball.son = {
          r: this.getRandomNumber([ball.empty.r / 2, ball.empty.r / 4 * 3]),
          color: [...ball.color]
        }
        break;
    }

    this.balls.push(ball)
  }
  //  判断该位置是否重叠
  isOverlap(ball) {
    return !this.balls.every((b) => {
      let d = Math.sqrt(Math.pow(ball.x - b.x, 2) + Math.pow(ball.y - b.y, 2))
      if (d <= (ball.r + b.r)) {
        return false
      }
      return true
    })
  }
  //  添加一个镜像Ball
  addMirrorBall(ball, obj) {
    var newBall = {}
    for (var key in ball) {
      if (obj[key] !== undefined) {
        newBall[key] = obj[key]
      }
      else {
        newBall[key] = ball[key]
      }
    }

    return newBall
  }
  //  渲染
  render(progress) {
    this.cxt.clearRect(0, 0, this.width, this.height)

    Array.from(this.balls, (ball) => {
      this.renderBall(ball)

      //  左右上下镜像球
      if (ball.mirror) {
        return this.renderBall(ball.mirror, ball)
      }
      else if (!ball.mirror && ball.x < ball.r) {
        ball.mirror = this.addMirrorBall(ball, { x: ball.x + this.width, mirror: null })
        this.renderBall(ball.mirror, ball)
      }
      else if (!ball.mirror && ball.x > this.width - ball.r) {
        ball.mirror = this.addMirrorBall(ball, { x: ball.x - this.width, mirror: null })
        this.renderBall(ball.mirror, ball)
      }
      else if (!ball.mirror && ball.y < ball.r) {
        ball.mirror = this.addMirrorBall(ball, { y: ball.y + this.height, mirror: null })
        this.renderBall(ball.mirror, ball)
      }
      else if (!ball.mirror && ball.y > this.height - ball.r) {
        ball.mirror = this.addMirrorBall(ball, { y: ball.y - this.height, mirror: null })
        this.renderBall(ball.mirror, ball)
      }
    })
  }
  //  渲染单个球
  renderBall (ball, parent) {
    let x = ball.x,
        y = ball.y

    //  大球体
    this.renderArc(x, y, ball.r, this.getRGBA(ball.color, ball.opacity))

    //  type:1|2 空心白色部分
    this.cxt.globalCompositeOperation = 'destination-out'
    ball.type > 0 && this.renderArc(x, y, ball.empty.r, '#fff')

    //  type:2 球心部分
    this.cxt.globalCompositeOperation = 'source-over'
    ball.type === 2 && this.renderArc(x, y, ball.son.r, this.getRGBA(ball.son.color, ball.opacity))

    //  连线
    Array.from(this.balls, (b) => {
      if (ball === b) {
        return false
      }

      let d = Math.sqrt(Math.pow(x - b.x, 2) + Math.pow(y - b.y, 2))
      if (d < this.line_range && d > (ball.r + b.r)) {
        var g = this.cxt.createLinearGradient(x, y, b.x, b.y)
        if (ball.type === 1) {
          g.addColorStop(0, this.getRGBA(ball.color, 1 - d / this.line_range))
          g.addColorStop(ball.empty.r / d, this.getRGBA(ball.color, 1 - d / this.line_range))
          g.addColorStop(ball.empty.r / d, 'transparent')
        }
        else if (ball.type === 2) {
          g.addColorStop(0, 'transparent')
          g.addColorStop(ball.son.r / d, 'transparent')
          g.addColorStop(ball.son.r / d, this.getRGBA(ball.color, 1 - d / this.line_range))
          g.addColorStop(ball.empty.r / d, this.getRGBA(ball.color, 1 - d / this.line_range))
          g.addColorStop(ball.empty.r / d, 'transparent')
        }
        else {
          g.addColorStop(0, 'transparent')
        }
        g.addColorStop(ball.r / d, 'transparent')
        g.addColorStop(ball.r / d, this.getRGBA(ball.color, 1 - d / this.line_range))
        g.addColorStop(1 - b.r / d, this.getRGBA(b.color, 1 - d / this.line_range))
        g.addColorStop(1 - b.r / d, 'transparent')
        g.addColorStop(1, 'transparent')
        this.cxt.strokeStyle = g
        this.renderLine(x, y, b.x, b.y)
      }
      else if (d < (ball.r + b.r) && !ball.isCrash) {
        ball.isCrash = true
        b.isCrash = true
        this.crashHandle(ball, b)

        if (parent) {
          parent.isCrash = true
          parent.vx = ball.vx
          parent.vy = ball.vy
        }

        if (ball.mirror) {
          ball.mirror.isCrash = true
          ball.mirror.vx = ball.vx
          ball.mirror.vy = ball.vy
        }
      }
    })
  }
  crashHandle(b1, b2) {
    let deg = Math.atan2(b2.y - b1.y, b2.x - b1.x)
    let speed1 = Math.sqrt(b1.vx * b1.vx + b1.vy * b1.vy)
    let speed2 = Math.sqrt(b2.vx * b2.vx + b2.vy * b2.vy)
    let dir1 = Math.atan2(b1.vy, b1.vx)
    let dir2 = Math.atan2(b2.vy, b2.vx)

    let vx1 = speed1 * Math.cos(dir1 - deg)
    let vy1 = speed1 * Math.sin(dir1 - deg)
    let vx2 = speed2 * Math.cos(dir2 - deg)
    let vy2 = speed2 * Math.sin(dir2 - deg)

    let fx1 = vx2
    let fy1 = vy1
    let fx2 = vx1
    let fy2 = vy2

    b1.vx = Math.cos(deg) * fx1 + Math.cos(deg + Math.PI / 2) * fy1
    b1.vy = Math.sin(deg) * fx1 + Math.sin(deg + Math.PI / 2) * fy1
    b2.vx = Math.cos(deg) * fx2 + Math.cos(deg + Math.PI / 2) * fy2
    b2.vy = Math.sin(deg) * fx2 + Math.sin(deg + Math.PI / 2) * fy2
  }
  //  更新
  update() {
    this.balls = this.balls.map((ball) => {
      if (ball.x < -ball.r) {
        return ball.mirror
      }
      if (ball.x > this.width + ball.r) {
        return ball.mirror
      }
      if (ball.y < -ball.r) {
        return ball.mirror
      }
      if (ball.y > this.height + ball.r) {
        return ball.mirror
      }

      ball.x += ball.vx
      ball.y += ball.vy
      ball.color = ball.color.map((n, i) => {
        ball.cur_i++
        if (ball.cur_i === ball.ColorList.length) {
          ball.cur_i = 0
          ball.reverse = !ball.reverse
        }
        return ball.ColorList[ball.reverse ? ball.ColorList.length - ball.cur_i - 1 : ball.cur_i][i]
      })
      if (ball.type === 2) {
        ball.son.color = [...ball.color]
      }

      if (ball.mirror) {
        ball.mirror.x += ball.mirror.vx
        ball.mirror.y += ball.mirror.vy
      }

      if (ball.isCrash) {
        ball.isCrash = false
      }

      return ball
    })
  }
  getRGBA(color, opacity) {
    return `rgba(${~~color[0]}, ${~~color[1]}, ${~~color[2]}, ${opacity})`
  }
  //  根据范围得到一个随机数[[范围], 小数位]
  getRandomNumber([min, max], decimal) {
    return (Math.random() * (max - min)) + min
  }
  //  画一个圆
  renderArc(x, y, r, color) {
    this.cxt.fillStyle = color

    this.cxt.beginPath()
    this.cxt.arc(x, y, r, 0, Math.PI * 2, true)
    this.cxt.closePath()

    this.cxt.fill()
  }
  //  画一条线
  renderLine(x1, y1, x2, y2) {
    this.cxt.beginPath()
    this.cxt.moveTo(x1, y1)
    this.cxt.lineTo(x2, y2)
    this.cxt.closePath()

    this.cxt.stroke()
  }
  //  画个三角形
  renderTri(coord1, coord2, coord3) {
    this.cxt.beginPath()
    this.cxt.moveTo(coord1.x, coord1.y)
    this.cxt.lineTo(coord2.x, coord2.y)
    this.cxt.lineTo(coord3.x, coord3.y)
    this.cxt.lineTo(coord1.x, coord1.y)
    this.cxt.closePath()

    this.cxt.stroke()
  }
}