import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import Logo from './Logo';
import LocationSearch from './LocationSearch';
import ProfileSettings from './ProfileSettings';
import {
  flexBetweenCenter,
  dFlex,
} from '../themes/commonStyles';

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
            <Logo />
            <LocationSearch />
            <ProfileSettings />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;