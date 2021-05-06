export {};
// ^ Nevermind this, due to: https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files

// everything will be async unless you don't need to

// we don't have top-level await so we wrap it in a function that we run below.
async function main() {
  // await basics();
  // await programaticPromises();
  // await sleepDemo();
  // await errorHandling();
}

async function basics() {
  async function isWeatherOk(): Promise<boolean> {
    // interogate some service whatever
    return true;
  }

  const result = isWeatherOk();
  // ^^^ DANGEROUS CODE ^^^
  if (result) {
    // Do something
  }

  const result2 = await isWeatherOk();
  // now result2 is a number
}

async function programaticPromises() {
  function isWeatherOk(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // do your thingie

      // @ts-expect-error
      resolve("123");

      resolve(true);
    });
  }

  const result = await isWeatherOk();
}

async function sleepDemo() {
  const sleep = (sleepTime: number) =>
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, sleepTime);
    });

  console.log("It's late need to go to bed");
  await sleep(2000);
  console.log("Ok, I'm fresh, let's code.");
}

async function errorHandling() {
  const failurePromise = new Promise((resolve, reject) => {
    reject(123);
  });

  try {
    // note, I'm awaiting a promise, this makes sense.
    await failurePromise;
  } catch (e) {
    console.log(e);
  }
}
main();
