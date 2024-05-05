/**
 * (Debouncing strategically delays the execution of the function.)
 * With debounce leading, leading call is executed and later calls ignored till timeout.
 * @param func The function to be debounced.
 * @param delay The time interval upto which , trailing calls are ignored.
 * @returns An anonymous function, that executes after specified delay.
 */
export function debounceLeading(func: (...args: any[])=> void, delay: number = 1000){
    let isRunning: boolean;
    
    return function(...args: any[]){
        if (isRunning) return;
        else {
            isRunning = true;
            setTimeout(function(){
                func(...args);
                isRunning = false;
            }
            , delay);
        }
    }
}


/**
 * (Debouncing strategically delays the execution of the function.)
 * With trailing debounce, the function executes only after a specified delay following the last event.
 * only register first call within the specified duration, ignores rest
 * @param func The function to be debounced.
 * @param delay The time interval up to which the execution is debounced.
 * @returns An anonymous function that executes after delay time of last call.
 */
export function debounceTrailing(func: (...args: any[])=> void, delay: number = 1000){
    let timer: number;
    
    return function(...args: any[]){
        if (timer) {
            clearTimeout(timer)
        }
           timer = setTimeout(()=>(
                func(...args)
            ), delay)
    }
}

