import { Formzk } from '@formzk/mui';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import { HelloWorld } from '@stack/ui';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import * as yup from 'yup';

type InputPayload = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Minimum length is 8 characters'),
});

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
      <Button variant="contained" onClick={() => setLanguage('en')}>
        EN
      </Button>
      <Button variant="outlined" onClick={() => setLanguage('zh-cn')}>
        ZH-CN
      </Button>
      <HelloWorld title={t('hello')} />

      <Formzk.MUI.Form<InputPayload>
        name="login-form"
        options={{
          resolver: yupResolver(schema),
          defaultValues: {
            email: 'xxxx@xyz.com',
            password: '',
            rememberMe: false,
          },
        }}
        onSubmit={(values) => {
          console.log('Formzk.Form submit ---->', values);
        }}
        config={[
          [
            {
              name: 'email',
              label: 'Email Address',
              component: 'TextField',
              disabled: false,
              props: {
                required: true,
                placeholder: 'Email Address',
              },
            },
            {
              name: 'password',
              label: 'Password',
              component: 'TextField',
              disabled: false,
              props: { type: 'password', placeholder: 'Password' },
            },
          ],
          [
            {
              name: 'rememberMe',
              label: 'Remember Me?',
              component: 'Switch',
              valueKey: 'checked',
              props: {},
            },
          ],
          [
            {
              content: (
                <Formzk.Native.Errors
                  render={(e, errors) => {
                    return (
                      <>
                        {errors.map((err) => {
                          return (
                            <Alert key={err} severity="error">
                              {err}
                            </Alert>
                          );
                        })}
                      </>
                    );
                  }}
                />
              ),
            },
          ],
          [],
          [
            {
              layoutProps: { sx: { marginTop: 10 } },
              content: (
                <>
                  <Formzk.Native.Submit
                    render={(e) => (
                      <Button type="submit" variant="contained">
                        Submit
                      </Button>
                    )}
                  />
                  <Formzk.Native.Reset
                    render={(e) => <Button onClick={e}>Reset</Button>}
                  />
                </>
              ),
            },
          ],
        ]}
      >
        {/* ANY CONTENT ADDED WILL SHOWS BELOW CONFIG */}

        {/* <Formzk.Native.Errors
          render={(e, errors) => {
            return (
              <>
                {errors.map((err) => {
                  return (
                    <Alert key={err} severity="error">
                      {err}
                    </Alert>
                  );
                })}
              </>
            );
          }}
        />

        <Formzk.Native.Submit
          render={(e) => <Button type="submit">Submit</Button>}
        />
        <Formzk.Native.Reset
          render={(e) => <Button onClick={e}>Reset</Button>}
        /> */}
      </Formzk.MUI.Form>
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default HomeScreen;
