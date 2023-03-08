import { UserChugSplashConfig } from '@chugsplash/core'

const config: UserChugSplashConfig = {
  options: {
    projectName: 'Pate MultiSigFactoryWithChugSplash',
  },
  contracts: {
    MyMultiSigFactoryWithChugSplash: {
      contract: 'MyMultiSigFactoryWithChugSplash',
      variables: {
        _multiSigCount: 0,
        _multiSigs: {},
        _multiSigIndex: {},
        _multiSigCreatorCount: {},
        _multiSigIndexByCreator: {},
      },
      constructorArgs: {},
    },
  },
}
