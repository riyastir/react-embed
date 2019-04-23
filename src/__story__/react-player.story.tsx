import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('react-player', module)
  .add('Facebook', () => {
    return (
      <Embed url={'https://www.facebook.com/OddCouplesDodo/videos/2002998246626642/'} />
    );
  })
  .add('Twitch', () => {
    return (
      <Embed url={'https://www.twitch.tv/videos/290187802'} />
    );
  })
  .add('DailyMotion', () => {
    return (
      <Embed url={'https://www.dailymotion.com/video/x75y5s2?playlist=x63vyg'} />
    );
  })
  .add('Vimeo', () => {
    return (
      <Embed url={'https://vimeo.com/54763818'} />
    );
  })
