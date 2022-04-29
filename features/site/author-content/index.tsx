import { LastFMTrack } from 'components/lastfm/lastfm';
import { UpdatedDate } from 'components/update-date';
import { WeatherConditions } from 'components/weather/weather';
import { FC } from 'react';
import { Container, CurrentlyInformations } from './styles';

interface AuthorContentProps {
  lastFm: any;
}

const AuthorContent: FC<AuthorContentProps> = ({ lastFm }) => (
  <Container>
    <CurrentlyInformations>
      <UpdatedDate />
      <WeatherConditions />
    </CurrentlyInformations>
    <LastFMTrack lastFm={lastFm} />
  </Container>
);

export { AuthorContent };
