import React from 'react'
import './lesson_4';

const Lesson4 = () => {
    let handlePromise: any = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: (paramName: string) => {
            console.log(`Promise is resolved with data: ${paramName}`)
            return paramName
        },
        onError: (paramName: string) => {
            console.log(`Promise is rejected with error: ${paramName}`)
            return paramName
        }

    }
    const createPromise = () => {
        handlePromise.promise = new Promise((resolve, reject) => {
            handlePromise.resolve = resolve
            handlePromise.reject = reject
        })

        console.log(handlePromise.promise)
    }
    const resolvePromise = () => {
        handlePromise.resolve(handlePromise.onSuccess('Promise Data'))
        console.log(handlePromise.promise)
    }
    const rejectPromise = () => {
        handlePromise.reject( handlePromise.onError('Promise Error'))
        console.log(handlePromise.promise)
    }
    return (

        <div>
            <button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolvePromise}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectPromise}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;