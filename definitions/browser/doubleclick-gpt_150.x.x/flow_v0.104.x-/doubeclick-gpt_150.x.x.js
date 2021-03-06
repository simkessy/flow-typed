// @flow

type $browser$doubleClickGpt$SingleSizeArray = number[];

type $browser$doubleClickGpt$NamedSize = string;

type $browser$doubleClickGpt$SingleSize =
  | $browser$doubleClickGpt$SingleSizeArray
  | $browser$doubleClickGpt$NamedSize;

type $browser$doubleClickGpt$MultiSize = $browser$doubleClickGpt$SingleSize[];

type $browser$doubleClickGpt$GeneralSize =
  | $browser$doubleClickGpt$SingleSize
  | $browser$doubleClickGpt$MultiSize;

type $browser$doubleClickGpt$SizeMapping = $browser$doubleClickGpt$GeneralSize[];

type $browser$doubleClickGpt$SizeMappingArray = $browser$doubleClickGpt$SizeMapping[];

interface CommandArray {
  push(f: Function): number;
}

interface Service {
  addEventListener(
    eventType: string,
    listener: (
      event:
        | ImpressionViewableEvent
        | SlotOnloadEvent
        | SlotRenderEndedEvent
        | slotVisibilityChangedEvent
    ) => void
  ): void;
}

interface CompanionAdsService extends Service {
  enableSyncLoading(): void;
  setRefreshUnfilledSlots(value: boolean): void;
}

interface ContentService extends Service {
  setContent(slot: Slot, content: String): void;
}

interface ResponseInformation {
  advertiserId: string;
  campaignId: string;
  creativeId?: number;
  labelIds: number[];
  lineItemId?: number;
}

interface SafeFrameConfig {
  allowOverlayExpansion?: boolean;
  allowPushExpansion?: boolean;
  sandbox?: boolean;
}

interface Slot {
  addService(service: Service): Slot;
  clearCategoryExclusions(): Slot;
  clearTargeting(opt_key?: string): Slot;
  defineSizeMapping(
    sizeMapping: $browser$doubleClickGpt$SizeMappingArray
  ): Slot;
  get(key: string): string | null;
  getAdUnitPath(): string;
  getAttributeKeys(): string[];
  getCategoryExclusions(): string[];
  getResponseInformation(): ResponseInformation;
  getSlotElementId(): string;
  getTargeting(key: string): string[];
  getTargetingKeys(): string[];
  set(key: string, value: string): Slot;
  setCategoryExclusion(categoryExclusion: string): Slot;
  setClickUrl(value: string): Slot;
  setCollapseEmptyDiv(
    collapse: boolean,
    opt_collapseBeforeAdFetch?: boolean
  ): Slot;
  setForceSafeFrame(forceSafeFrame: boolean): Slot;
  setSafeFrameConfig(config: SafeFrameConfig): Slot;
  setTargeting(key: string, value: string | string[]): Slot;
}

interface PassbackSlot {
  display(): void;
  get(key: string): string;
  set(key: string, value: string): PassbackSlot;
  setClickUrl(url: string): PassbackSlot;
  setForceSafeFrame(forceSafeFrame: boolean): PassbackSlot;
  setTagForChildDirectedTreatment(value: number): PassbackSlot;
  setTargeting(key: string, value: string | string[]): PassbackSlot;
  updateTargetingFromMap(map: Object): PassbackSlot;
}

interface PubAdsService extends Service {
  clear(opt_slots?: Slot[]): boolean;
  clearCategoryExclusions(): PubAdsService;
  clearTagForChildDirectedTreatment(): PubAdsService;
  clearTargeting(opt_key?: string): PubAdsService;
  collapseEmptyDivs(opt_collapseBeforeAdFetch?: boolean): boolean;
  defineOutOfPagePassback(adUnitPath: string): PassbackSlot;
  definePassback(
    adUnitPath: string,
    size: $browser$doubleClickGpt$GeneralSize
  ): PassbackSlot;
  disableInitialLoad(): void;
  display(
    adUnitPath: string,
    size: $browser$doubleClickGpt$GeneralSize,
    opt_div?: string,
    opt_clickUrl?: string
  ): Slot;
  enableAsyncRendering(): boolean;
  enableLazyLoad(opt_config?: {
    fetchMarginPercent?: number,
    renderMarginPercent?: number,
    mobileScaling?: number,
    ...
  }): PubAdsService;
  enableSingleRequest(): boolean;
  enableSyncRendering(): boolean;
  enableVideoAds(): void;
  get(key: string): string | null;
  getAttributeKeys(): string[];
  getTargeting(key: string): string[];
  getTargetingKeys(): string[];
  refresh(
    opt_slots?: Slot[],
    opt_options?: { changeCorrelator: boolean, ... }
  ): void;
  set(key: string, value: string): PubAdsService;
  setCategoryExclusion(categoryExclusion: string): PubAdsService;
  setCentering(centerAds: boolean): void;
  setCookieOptions(cookieOptions: number): PubAdsService;
  setForceSafeFrame(forceSafeFrame: boolean): PubAdsService;
  setLocation(
    latitudeOrAddress: string | number,
    opt_longitude?: number,
    opt_radius?: number
  ): PubAdsService;
  setPublisherProvidedId(ppid: string): PubAdsService;
  setSafeFrameConfig(config: SafeFrameConfig): PubAdsService;
  setTagForChildDirectedTreatment(value: number): PubAdsService;
  setTargeting(key: string, value: string | string[]): PubAdsService;
  setVideoContent(videoContentId: string, videoCmsId: string): void;
  updateCorrelator(): PubAdsService;
}

interface SizeMappingBuilder {
  addSize(
    viewportSize: $browser$doubleClickGpt$SingleSizeArray,
    slotSize: $browser$doubleClickGpt$GeneralSize
  ): SizeMappingBuilder;
  build(): $browser$doubleClickGpt$SizeMappingArray;
}

interface SlotEvent {
  serviceName: string;
  slot: Slot;
}

interface ImpressionViewableEvent extends SlotEvent {}

interface SlotOnloadEvent extends SlotEvent {}

interface SlotRenderEndedEvent extends SlotEvent {
  creativeId?: number;
  isEmpty: boolean;
  lineItemId?: number;
  size: number[] | string;
}

interface slotVisibilityChangedEvent extends SlotEvent {
  inViewPercentage: number;
}

interface Googletag {
  +apiReady: boolean;
  cmd: CommandArray;
  companionAds(): CompanionAdsService;
  content(): ContentService;
  defineOutOfPageSlot(adUnitPath: string, opt_div?: string): Slot;
  defineSlot(
    adUnitPath: string,
    size: $browser$doubleClickGpt$GeneralSize,
    opt_div?: string
  ): Slot;
  destroySlots(opt_slots?: Slot[]): boolean;
  disablePublisherConsole(): void;
  display(div?: string): void;
  enableServices(): void;
  getVersion(): string;
  openConsole(opt_div?: string): void;
  pubads(): PubAdsService;
  pubadsReady: boolean;
  setAdIframeTitle(title: string): void;
  sizeMapping(): SizeMappingBuilder;
}

declare var googletag: Googletag;
