/**
 * Debounces the trailing calls, only register first call within the specified duration, ignores rest
 * @param func The function to be debounced.
 * @param delay The time interval upto which , trailing calls are ignored.
 * @returns An anonymous function, that executes after specified delay.
 */
export function debounceTrailing(func: (...args: any[])=> void, delay: number = 1000){
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
 * Debounces leading calls, ie: ignores previous call if new call is received before previous executes / before delay
 * @param func The function to be debounced.
 * @param delay The time interval up to which the execution is debounced.
 * @returns An anonymous function that executes after delay time of last call.
 */
export function debounceLeading(func: (...args: any[])=> void, delay: number = 1000){
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

