const mongoose= require('mongoose');
const Schema = mongoose.Schema

const ApexFPSSchema= new Schema({
    name: String,
    id: String,
    Settings: [{displayMode: String},{aspectRatio: String},{resolution: String},{fieldOfView: String},{Vsync: String},{adaptiveFpsTarget: String},{adaptiveSuperSampling: String},{AntiAliasing: String},{TextureStreamingBudget: String},{TextureFiltering: String},{VolumetricLightning: String},{ModelDetail: String},{DynamicSpot: String},{EffectsDetail: String},{ImpactMarks: String}],
    desc: String


})

module.exports=mongoose.model('ApexFps',ApexFPSSchema,'FpsGuide')