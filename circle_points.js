const r = require("raylib");

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const FPS = 50;
    const noOfPoints = 12;
    const angle = (2 * Math.PI) / noOfPoints;
    const radius = 150;
    const x = 200;
    const y = 200;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Points around Circle");
    r.SetTargetFPS(FPS);

    return { WIDTH, HEIGHT, FPS, noOfPoints, angle, radius, x, y };
}

function drawCircle(x, y, radius, color) {
    r.DrawCircle(x, y, radius, color);
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    drawCircle(w.x, w.y, w.radius, r.BLACK);

    for (let n = 0; n < w.noOfPoints; n++) {
        const x = w.x + w.radius * Math.sin(w.angle * n);
        const y = w.y - w.radius * Math.cos(w.angle * n);
        drawCircle(x, y, 5, r.RED);
    }

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function teardown() {
    r.CloseWindow();
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
