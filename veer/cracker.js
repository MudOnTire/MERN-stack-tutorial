const axios = require('axios').default;
const chalk = require('chalk').default;

function sleep(interval) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve();
      clearTimeout(timer);
    }, interval);
  })
}

async function fetchImg(dir) {
  const url = `https://goss.veer.com/creative/vcg/veer/${dir}/veer-309873970.jpg`;
  let shouldStop = false;
  try {
    const res = await axios.get(url);
    console.log(chalk.green(`${dir} succeed`));
    shouldStop = true;
  } catch (err) {
    console.warn(chalk.red(`${dir} fail`));
  }
  // await sleep(500);
  if (!shouldStop) await fetchImg(dir + 1);
}

// 612, 1200

fetchImg(3282);