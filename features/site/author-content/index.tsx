import { LastFMTrack, LastFmTrackProps } from 'components/lastfm/lastfm';
import { UpdatedDate } from 'components/update-date';
import { WeatherConditions } from 'components/weather/weather';
import { FC } from 'react';
import { Container, CurrentlyInformations } from './styles';

const AuthorContent: FC<LastFmTrackProps> = ({ lastFm }) => (
  <Container>
    <CurrentlyInformations>
      <UpdatedDate />
      <WeatherConditions />
    </CurrentlyInformations>
    <LastFMTrack lastFm={lastFm} />
  </Container>
);

export { AuthorContent };
