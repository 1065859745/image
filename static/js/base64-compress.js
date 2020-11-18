export function base64Compress(base64, callback) {
	var newImage = new Image()
	newImage.src = base64
	newImage.onload = function() {
		var canvas = document.createElement("canvas")
		var ctx = canvas.getContext("2d")
		canvas.width = this.width
		canvas.height = this.height
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
		var newBase64 = canvas.toDataURL("image/jpeg", 1/(base64.length/96666))
		callback(newBase64)
	}
}
