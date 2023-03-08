import { UserChugSplashConfig } from '@chugsplash/core'

const config: UserChugSplashConfig = {
  options: {
    projectName: 'My Multisig',
  },
  contracts: {
    MyMultiSigFactoryWithChugSplash: {
      contract: 'MyMultiSigFactoryWithChugSplash',
      variables: {
        _multiSigCount: 1,
        _multiSigs: {},
        _multiSigIndex: {},
        _multiSigCreatorCount: {},
        _multiSigIndexByCreator: {},
      },
      constructorArgs: {},
    },
  },
}
