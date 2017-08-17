import Auth from 'auth0-js'
import AuthLock from 'auth0-lock'

import * as Configuration from './settings'
import * as Storage from './storage'

// const MUTATION = gql`
//     mutation($idToken: String!) {
//         createUser(authProvider: { auth0: { idToken: $idToken } }) {
//             id
//         }
//     }
// `;

const KEYS = {
  accessToken: 'access_token',
  idToken: 'id_token',
  expiresAt: 'expires_at',
}

const auth = new Auth.WebAuth({
  domain: 'souleman13.auth0.com',
  clientID: 'ocYCo4iED7d02rEC0TVPtUHNc5KXic0M',
  redirectUri: 'http://localhost:3000/callback',
  audience: 'https://souleman13.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid',
})

const lock = new AuthLock(Configuration.clientID, Configuration.domain, {
  oidcConformant: true,
  autoclose: true,
  auth: {
    redirectUrl: Configuration.redirectUri,
    responseType: Configuration.responseType,
    audience: Configuration.audience,
    params: {
      scope: 'openid',
    },
  },
})

const parse = async () => new Promise((resolve, reject) => {
  return auth.parseHash((err, result) => {
    if (err) return reject(err)

    if (result && result.accessToken && result.idToken) {
      const { accessToken, idToken, expiresIn } = result

      return resolve(configure({ expiresIn, accessToken, idToken }))
    }

    return reject(new Error(`Parse hash didn't have the right parameters`))
  })
})

const configure = async ({ expiresIn, accessToken, idToken }) => {
  const expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime())

  return await Promise.all([
    Storage.save(KEYS.accessToken, accessToken),
    Storage.save(KEYS.idToken, idToken),
    Storage.save(KEYS.expiresAt, expiresAt),
    // Promise.resolve(Client.mutate({
    //     mutation: MUTATION,
    //     variables: {
    //         idToken,
    //     },
    // }))
  ])
}

export const login = () => lock.show()

export const logout = () => {
  Storage.reset()
}

export const handleAuthentication = async () => {
  return await parse()
}

export const isAuthenticated = () => {
  try {
    const raw = Storage.itemByKey(KEYS.expiresAt)
    if (!raw) return false
    return (new Date().getTime() < JSON.parse(raw))
  } catch (err) {
    console.error(err)
    return false
  }
}