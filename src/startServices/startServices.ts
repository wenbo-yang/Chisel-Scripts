import * as child from 'child_process';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const CHISELIMAGESKELETONIZATIONPATH = '../Chisel-Image-Skeletonization';

const bash = child.spawn('bash', ['./src/startServices/start_image_skeletonization_service.sh']);

bash.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

bash.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

bash.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

await new Promise((resolve) => setTimeout(resolve, 5000));
