import { LastFMTrack } from 'components/lastfm/lastfm';
import { UpdatedDate } from 'components/update-date';
import { WeatherConditions } from 'components/weather/weather';
import { Container, CurrentlyInformations } from './styles';

const AuthorContent = () => (
  <Container>
    <CurrentlyInformations>
      <UpdatedDate />
      <WeatherConditions />
    </CurrentlyInformations>
    <LastFMTrack />
  </Container>
);

export { AuthorContent };
