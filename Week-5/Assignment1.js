function removeDuplicates(arr) {
    return new Promise((resolve, reject) => {
      console.log("Removing duplicates from given array");
      var setArr = new Set(arr);
      if (arr.length) {
        console.log("Promise Resolved")
        resolve(setArr);
      } else {
        reject("Promise Rejected");
      }
    });
}
  
async function* genTask() {
    try {
        const response = await removeDuplicates([67,90,90,78]);
        yield await response;
    } catch (err) {
        yield err;
    }
}

const iter = genTask();
// console.log(it);

iter.next().then(({ value, done }) => {
    console.log(value);
});

async function doTask1() {
    try {
        const response = await removeDuplicates([1,34,21,2]);
        console.log(response);
        console.log("resolved promise");
    } catch (err) {
        console.log("rejected promise");
        console.log(err);
    }
}
  
async function doTask2() {
    try {
        const response = await removeDuplicates([1,34,21,2,34]);
        console.log("Awaiting request");
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
  
async function doTask3() {
    try {
        const response = await removeDuplicates([]);
        console.log("Awaiting request");
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
  
async function doTasks() {
    await doTask1();
    await doTask2();
    await doTask3();
}

doTasks();