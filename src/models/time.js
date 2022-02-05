import mongoose from 'mongoose'

const timeSchema = mongoose.Schema({
    time: {
        type: String,
        required: true,  
    },
    timezone: {
      type: String,
      required: true,
      min: 3,
      max: 10  
    }
})

export default mongoose.model('Time', timeSchema)  