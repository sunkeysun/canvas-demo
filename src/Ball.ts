export default class Ball {
  constructor({ x = 50, y = 50, r = 50, ctx }) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.ctx = ctx;
  }
  render() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = "red";
    this.ctx.strokeStyle = "red";
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.restore();
  }
}
