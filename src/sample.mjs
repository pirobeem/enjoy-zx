#!/usr/bin/env zx
$.verbose = false;

const echoResult = await $`echo hello world`
console.log(echoResult.stdout);

// let branch = await $`git branch --show-current`
// await $`dep deploy --branch=${branch}`

// await Promise.all([
//   $`sleep 1; echo 1`,
//   $`sleep 2; echo 2`,
//   $`sleep 3; echo 3`,
// ])

// let name = 'foo bar'
// await $`mkdir /tmp/${name}`