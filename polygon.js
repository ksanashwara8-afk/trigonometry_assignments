const r = require("raylib");

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const FPS = 50;
    const noOfSides = 7;
    const angle = (2 * Math.PI) / noOfSides;
    const radius = 150;
    const x = 200;
    const y = 200;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Polygon");
    r.SetTargetFPS(FPS);

    return { WIDTH, HEIGHT, FPS, noOfSides, angle, radius, x, y };
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    for (let n = 0; n < w.noOfSides; n++) {
        const x1 = w.x + w.radius * Math.sin(w.angle * n);
        const y1 = w.y - w.radius * Math.cos(w.angle * n);

        const x2 = w.x + w.radius * Math.sin(w.angle * (n + 1));
        const y2 = w.y - w.radius * Math.cos(w.angle * (n + 1));

        r.DrawLine(x1, y1, x2, y2, r.BLACK);
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
