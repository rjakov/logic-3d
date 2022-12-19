export declare const UtilsService: {
    loadScene(app: any, url: string): Promise<unknown>;
    findObject3dsByMaterialEntity(data: any, entity: any): any[];
    /** used in older methods */
    getObjectByEntity(scene: any, app: any, entity: any, apiUrl: any): Promise<unknown>;
    getObjectsByEntityInScene(scene: any, entity: any): any[];
    getObjectsByEntityInFromAsset(scene: any, app: any, entity: any, apiUrl: any): Promise<unknown>;
    getObjectsByEntity(scene: any, app: any, entity: any, apiUrl: any): Promise<unknown>;
    getMaterialByEntity(scene: any, app: any, entity: any, apiUrl: any): Promise<unknown>;
    findParentObjectByObject3dEntity(data: any, entity: any): any;
    updateWorldMaterialConcerningTexture(app: any, texture: any): void;
    getObjectBySceneNameInEntity(scene: any, sceneName: string): any;
    sanitizeStr(str: string): string;
    getObjectByName(scene: any, name: any): any;
    getMaterialByName(scene: any, name: any): any;
    deepFilterDataByKey(data: any, filteredKey: any): any[];
    getObject3dNamesFromObject3dSceneName(object3d: any): any;
    changeMaterialOnObject3dEntities(scene: any, object3dEntities: any, material: any): void;
    positionsEqual(positionA: any, positionB: any): boolean;
    switchObjectsGetToHideObject3dSceneNames(menuLogicObject: any): any;
    getMainAsset(assetUrls: any): any;
    changeObjectsVisibility(apiUrl: any, app: any, logic: any, objects: any, scene: any, show: any): Promise<void>;
};
//# sourceMappingURL=utils.service.d.ts.map