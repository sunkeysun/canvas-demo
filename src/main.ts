import './style.css'
import Ball from './Ball'
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

const W = 500,
  H = 500
canvas.width = W
canvas.height = H

const ball = new Ball({ ctx, r: 10 })
const R = W / 2 - 50
let angle = 0
let lastTime = 0

function renderTrack() {
  ctx.save()
  ctx.beginPath()
  ctx.translate(W / 2, H / 2)
  ctx.arc(0, 0, R, 0, 2 * Math.PI)
  ctx.strokeStyle = 'grey'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(-W / 2, 0)
  ctx.lineTo(W / 2, 0)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, -H / 2)
  ctx.lineTo(0, H / 2)
  ctx.stroke()

  ctx.restore()
}

;(function move(time: number) {
  ctx.clearRect(0, 0, W, H)
  if (!lastTime) {
    lastTime = time
  }
  const delta = time - lastTime
  lastTime = time
  if (delta) {
    const fps = Math.round(1000 / delta)
    ctx.font = '20px Arial'
    ctx.fillText(`${fps}FPS`, W - 100, 30)
  }
  renderTrack()
  angle = (angle + 1) % 360
  ball.x = R * Math.cos((angle * Math.PI) / 180) + W / 2
  ball.y = R * Math.sin((angle * Math.PI) / 180) + H / 2
  ctx.moveTo(W / 2, H / 2)
  ctx.lineTo(ball.x, ball.y)
  ctx.stroke()

  ball.render()

  window.requestAnimationFrame(move)
})()
