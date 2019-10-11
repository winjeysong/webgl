function createShader(gl, type, sourceId) {
    const shader = gl.createShader(type);
    const source = document.querySelector(`#${sourceId}`).innerHTML;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    // 编译成功
    const isSuccess = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (isSuccess) {
        return shader;
    }
    // 编译失败
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

function randomColor() {
    const random = Math.random;
    return {
        r: random() * 255,
        g: random() * 255,
        b: random() * 255,
        a: random(),
    };
}