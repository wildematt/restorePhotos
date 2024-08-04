import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

export const CompareSlider = ({
  original,
  restored,
}: {
  original: string;
  restored: string;
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt='原图' />}
      itemTwo={<ReactCompareSliderImage src={restored} alt='优化后图片' />}
      portrait
      className='flex w-[475px] mt-5'
    />
  );
};
