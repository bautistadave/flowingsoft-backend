import Time from '../models/time'

export const getTimes = async (req, res) => {
    try {
        const times = await Time.find({})
        res.json(times)
    } catch (error) {
        res.status(200).json({
            message: error
        })
    }
}

export const createTime = async (req, res) => {
    let offset = req.body.timezone;
    let t = req.body.time
    let hh, mm, ss
    hh = parseInt(t.slice(0, 2) * 60)
    mm = parseInt(t.slice(3, 5))
    ss = parseInt(t.slice(6, 8))
    
    let minTotal = hh + mm + (ss = 0 ? 0 : ss/60)     
    //tomamos como referencia nuestra hora local
    let d = new Date();
    // lo convierte  a milisegundos
    // añade la dirferencia horaria
    // recupera la hora en formato UTC
    let utc = d.getTime() + ((d.getTimezoneOffset() * 60000) + minTotal);
    
    // crea un nuevo objeto Date usando la diferencia dada.
    let nd = new Date(utc + (3600000*offset));
    let format = nd.getHours() + ":" + nd.getMinutes() + ":" + nd.getSeconds()

    const time = new Time({
        time: format,     
        timezone: 'utc' 
    })

    try {
        const timeSaved = await time.save()
        res.json({
            //message: 'Time was saved',
            response: timeSaved
        })
    } catch (error) {
        console.log(error);
    }
}

