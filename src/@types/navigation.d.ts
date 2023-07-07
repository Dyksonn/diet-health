export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: undefined;
      createFeed: undefined;
      finishCreate: { isFailed: boolean };
      editFeed: {
        data: {
          name: string;
          description: string;
          date: Date;
          hour: Date;
          isDiet: boolean;
        }
      };
    }
  }
}