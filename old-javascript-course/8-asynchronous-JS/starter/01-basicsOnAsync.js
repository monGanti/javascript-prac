/**
 * Basics on how Async works
 */

    const second = () => {
            //setTimeout(callback(),<timeValue>);

            setTimeout(() => {
                console.log(`Async Hey there!!`);
            },2000);
    }

    const first = () => {
            console.log(`This is first`);
            second();
            console.log(`this is end`); //Note that this line may not wait until previous step to finish to print this. Check out the browser console for it's working.
    }

    first();
