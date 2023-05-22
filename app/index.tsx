import { Text, TouchableOpacity, View } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import Logo from '../src/assets/logo.svg'
import { styled } from 'nativewind'

import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useCallback, useEffect } from 'react'
import { api } from '../src/lib/api'
import { useRouter } from 'expo-router'

const StyledLogo = styled(Logo)

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/3e9d265d9fa1fccf7e26',
}

export default function App() {
  const router = useRouter()

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '3e9d265d9fa1fccf7e26',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime',
      }),
    },
    discovery,
  )

  const handleGithubOAuthCoede = useCallback(
    async (code: string) => {
      const response = await api.post('/register', {
        code,
      })

      const { token } = response.data

      await SecureStore.setItemAsync('token', token)

      router.push('/memories')
    },
    [router],
  )

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params
      handleGithubOAuthCoede(code)
    }
  }, [response, handleGithubOAuthCoede])

  return (
    <View className="flex-1 items-center px-8 py-10">
      <View className="flex-1 items-center justify-center gap-6">
        <StyledLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
          onPress={() => signInWithGithub()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </View>
  )
}
