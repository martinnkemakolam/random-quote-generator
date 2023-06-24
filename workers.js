// called anytime a postmessage is called from client scriprt
onmessage =(evt)=>{
    reRun(fetch(evt.data), 0)
        let arry = []
    function reRun(fetchPara, incriement){
        if (incriement === 30) {
            fetchPara.then((req)=>{
                if(req.status === 200){
                    return req.json()
                }
            }, (err)=>{
                console.error(err)
            })
            .then((res)=>{
                arry.push(res.slip.advice)
                postMessage({array: arry})
            })
        } else {
            fetchPara
                .then((req)=>{
                    if (req) {
                        if(req.status === 200){
                            return req.json()
                        }
                    }
                }, (err)=>{
                    console.error(err)
                })
                .then(res =>{
                    arry.push(res.slip.advice)
                    postMessage({array: arry})
                    setTimeout(()=> reRun( fetch(evt.data), incriement + 1), 2000)
                })
        }
    }
}