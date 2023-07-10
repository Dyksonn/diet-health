export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: undefined;
      createFeed?: {
        data: PropsDataFeed,
        section: string;
      };
      finishCreate: { isFailed: boolean };
      editFeed: {
        data: PropsDataFeed,
        section: string;
      };
    }
  }
}