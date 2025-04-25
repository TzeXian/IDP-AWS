import { Button, Stack, Typography } from '@mui/material';
import { HelloWorld } from '@stack/ui';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const HomeScreen: React.FC = () => {
  const { t } = useTranslation('common');
  // =============== VIEWS
  return (
    <div>
      <Typography variant="h4">Home</Typography>
      <br />
      <Stack direction="row" spacing={4}>
        <Button variant="outlined" onClick={() => setLanguage('en')}>
          EN
        </Button>
        <Button variant="outlined" onClick={() => setLanguage('zh-cn')}>
          ZH-CN
        </Button>
      </Stack>
      <br />
      <HelloWorld title={t('hello')} />
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default HomeScreen;
