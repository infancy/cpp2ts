import * as cts from './src/antlr4/index'

let cppSrc = `
struct Ray
{
    Ray() {}
    
    Vec3f org;  //!< Ray origin
    Vec3f dir;  //!< Ray direction
    float tmin; //!< Minimal distance to intersection
};
`

console.log(cts.CPP2TS.convert(cppSrc))