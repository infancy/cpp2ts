import * as cts from './src/antlr4/index'

let cppSrc = `
float FresnelDielectric(
    float aCosInc,
    float mIOR)
{
    if(mIOR < 0)
        return 1.f;

    float etaIncOverEtaTrans;

    if(aCosInc < 0.f)
    {
        aCosInc = -aCosInc;
        etaIncOverEtaTrans = mIOR;
    }
    else
    {
        etaIncOverEtaTrans = 1.f / mIOR;
    }

    const float sinTrans2 = Sqr(etaIncOverEtaTrans) * (1.f - Sqr(aCosInc));
    const float cosTrans = std::sqrt(std::max(0.f, 1.f - sinTrans2));

    const float term1 = etaIncOverEtaTrans * cosTrans;
    const float rParallel =
        (aCosInc - term1) / (aCosInc + term1);

    const float term2 = etaIncOverEtaTrans * aCosInc;
    const float rPerpendicular =
        (term2 - cosTrans) / (term2 + cosTrans);

    return 0.5f * (Sqr(rParallel) + Sqr(rPerpendicular));
}    
`

console.log(cts.CPP2TS.convert(cppSrc))