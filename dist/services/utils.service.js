var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as _ from 'lodash';
const getObject3dNamesFromObject3dSceneName = object3d => {
    return object3d.sceneName.split(',').map(n => n.trim());
};
const isMobile = () => {
    return (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        (window.innerWidth <= 767 && window.innerHeight <= 900));
};
const getMainAsset = assetUrls => {
    const runningOnMobile = isMobile();
    const gltfRegexp = /.+\.gltf(\.xz)?/;
    if (runningOnMobile) {
        const forMobileAsset = assetUrls.find(au => /.*(mobile).*\.gltf(\.xz)?/.test(au));
        if (forMobileAsset) {
            return forMobileAsset;
        }
        else {
            return assetUrls.find(au => gltfRegexp.test(au));
        }
    }
    return assetUrls.find(au => gltfRegexp.test(au));
};
const getObjectsByEntityInScene = (scene, entity) => {
    const sceneNames = getObject3dNamesFromObject3dSceneName(entity);
    const objects = [];
    if (!sceneNames.length) {
        return objects;
    }
    for (const sceneName of sceneNames) {
        const object = UtilsService.getObjectByName(scene, sceneName);
        if (object)
            objects.push(object);
    }
    return objects;
};
export const UtilsService = {
    loadScene(app, url) {
        return new Promise((resolve, reject) => {
            app.loader.load(url, loaded => {
                if (typeof app._updateMaterialsFromGLTF === 'function')
                    app._updateMaterialsFromGLTF(loaded);
                if (typeof app._updateAnimationsFromGLTF === 'function')
                    app._updateAnimationsFromGLTF(loaded, loaded.scene);
                if (typeof app._updateSceneEnvIBL === 'function')
                    app._updateSceneEnvIBL(loaded.scene, app._envRTargetIBL);
                resolve(loaded.scene);
            }, e => { }, err => {
                reject(err);
            });
        });
    },
    findObject3dsByMaterialEntity(data, entity) {
        const foundObject3ds = [];
        const object3ds = this.deepFilterDataByKey(data, 'object3ds');
        const ownObject3ds = this.deepFilterDataByKey(data, 'ownObject3ds');
        const allObject3ds = [...object3ds, ...ownObject3ds];
        allObject3ds.forEach(o => {
            if (o.materials && o.materials.length) {
                if (o.materials.find(m => {
                    return m.id === entity.id;
                })) {
                    foundObject3ds.push(o);
                }
            }
        });
        return foundObject3ds;
    },
    /** used in older methods */
    getObjectByEntity(scene, app, entity, apiUrl) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let object = scene.getObjectByName(entity.sceneName);
            if (object) {
                resolve(object);
            }
            else {
                if (entity.asset) {
                    const url = getMainAsset(entity.asset.assetUrls);
                    const scene = yield this.loadScene(app, `${apiUrl}${url}`);
                    scene.userData.entity = Object.assign({}, entity);
                    resolve(scene);
                }
                else {
                    reject();
                }
            }
        }));
    },
    getObjectsByEntityInScene(scene, entity) {
        return getObjectsByEntityInScene(scene, entity);
    },
    getObjectsByEntityInFromAsset(scene, app, entity, apiUrl) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (entity.asset) {
                const url = getMainAsset(entity.asset.assetUrls);
                const loadedScene = yield this.loadScene(app, `${apiUrl}${url}`);
                loadedScene.userData.entity = Object.assign({}, entity);
                scene.add(loadedScene);
                resolve(getObjectsByEntityInScene(scene, entity));
            }
            else {
                reject();
            }
        }));
    },
    getObjectsByEntity(scene, app, entity, apiUrl) {
        const getObjects = entity => {
            const sceneNames = UtilsService.getObject3dNamesFromObject3dSceneName(entity);
            const objects = [];
            if (!sceneNames.length) {
                return objects;
            }
            for (const sceneName of sceneNames) {
                const object = UtilsService.getObjectByName(scene, sceneName);
                if (object)
                    objects.push(object);
            }
            return objects;
        };
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let objects = getObjects(entity);
            if (objects.length) {
                resolve(objects);
            }
            else {
                if (entity.asset) {
                    const url = getMainAsset(entity.asset.assetUrls);
                    const loadedScene = yield this.loadScene(app, `${apiUrl}${url}`);
                    loadedScene.userData.entity = Object.assign({}, entity);
                    scene.add(loadedScene);
                    resolve(getObjects(entity));
                }
                else {
                    reject();
                }
            }
        }));
    },
    getMaterialByEntity(scene, app, entity, apiUrl) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let material = this.getMaterialByName(scene, entity.sceneName);
            if (material) {
                resolve(material);
            }
            else if (entity.asset) {
                const url = entity.asset.assetUrls.find(au => /.+\.gltf/.test(au));
                const scene = yield this.loadScene(app, `${apiUrl}${url}`);
                scene.userData.entity = Object.assign({}, entity);
                scene.add(scene);
                material = this.getMaterialByName(scene, entity.sceneName);
                resolve(material);
            }
            else {
                reject();
            }
        }));
    },
    findParentObjectByObject3dEntity(data, entity) {
        let parent;
        const object3ds = this.deepFilterDataByKey(data, 'object3ds');
        const ownObject3ds = this.deepFilterDataByKey(data, 'ownObject3ds');
        const allObject3ds = [...object3ds, ...ownObject3ds];
        allObject3ds.forEach(o => {
            if (o.object3ds && o.object3ds.length) {
                if (o.object3ds.find(o => {
                    return o.id === entity.id;
                })) {
                    parent = o;
                }
            }
            else if (o.ownObject3ds && o.ownObject3ds.length) {
                if (o.ownObject3ds.find(o => {
                    return o.id === entity.id;
                })) {
                    parent = o;
                }
            }
        });
        return parent;
    },
    updateWorldMaterialConcerningTexture(app, texture) {
        // update world material if it is using this texture
        const wMat = app.worldMaterial;
        if (wMat) {
            for (const textureName in wMat.nodeTextures) {
                if (wMat.nodeTextures[textureName] === texture) {
                    app.updateEnvironment(wMat);
                }
            }
        }
    },
    getObjectBySceneNameInEntity(scene, sceneName) {
        let obj = null;
        scene.traverse(c => {
            if (c && c.userData.entity && c.userData.entity.sceneName) {
                if (this.sanitizeStr(c.userData.entity.sceneName) === this.sanitizeStr(sceneName))
                    obj = c;
            }
        });
        return obj;
    },
    sanitizeStr(str) {
        return str
            .replace('с', 'c') // russian с
            .replace('С', 'C') // russian С
            .replace('е', 'e') // russian е
            .replace('Е', 'E') // russian Е
            .replace('а', 'a') // russian а
            .replace('А', 'A') // russian А
            .replace('о', 'o') // russian о
            .replace('О', 'O'); // russian О
    },
    getObjectByName(scene, name) {
        let object = null;
        name = this.sanitizeStr(name);
        scene.traverse(o => {
            if (o && o.name && this.sanitizeStr(o.name) === name) {
                object = o;
            }
        });
        return object;
    },
    getMaterialByName(scene, name) {
        let material = null;
        scene.traverse(c => {
            if (c && c.material && c.material.name === name) {
                material = c.material;
            }
        });
        return material;
    },
    deepFilterDataByKey(data, filteredKey) {
        const filtered = [];
        const filter = data => {
            if (data) {
                if (Array.isArray(data) && data.length) {
                    _.forEach(data, value => {
                        filter(value);
                    });
                }
                else {
                    _.forEach(data, (value, key) => {
                        if (value) {
                            if (Array.isArray(value) && value.length) {
                                if (key === filteredKey && value) {
                                    _.forEach(value, v => {
                                        filtered.push(v);
                                        filter(v);
                                    });
                                }
                                else {
                                    _.forEach(value, v => {
                                        filter(v);
                                    });
                                }
                            }
                            else {
                                if (key === filteredKey && value) {
                                    filtered.push(Object.assign({}, value));
                                }
                            }
                        }
                    });
                }
            }
        };
        filter(data);
        return _.uniqBy(filtered, f => {
            return f.id;
        }).filter(f => f.id);
    },
    getObject3dNamesFromObject3dSceneName(object3d) {
        return getObject3dNamesFromObject3dSceneName(object3d);
    },
    changeMaterialOnObject3dEntities(scene, object3dEntities, material) {
        object3dEntities.forEach(object3d => {
            // in case we have several object names, splitted by ','
            const object3dSceneNames = getObject3dNamesFromObject3dSceneName(object3d);
            object3dSceneNames.forEach(sn => {
                object3d = UtilsService.getObjectByName(scene, sn);
                if (object3d) {
                    object3d.material = material;
                }
                else {
                    {
                        console.warn(`setObjectMenuMaterial - object3d ${sn} not found`);
                    }
                }
            });
        });
    },
    positionsEqual(positionA, positionB) {
        return positionA && positionB && positionA.x === positionB.x && positionA.y === positionB.y && positionA.z === positionB.z;
    },
    switchObjectsGetToHideObject3dSceneNames(menuLogicObject) {
        let hideBlockRegex = /(?:hide:)(.+)(?:show:)/i;
        let toHideSceneNamesArr = menuLogicObject.sceneName.replace(/\s/g, '').match(hideBlockRegex);
        if (!toHideSceneNamesArr || !toHideSceneNamesArr.length) {
            hideBlockRegex = /(?:hide:)(.+)/i;
            toHideSceneNamesArr = menuLogicObject.sceneName.replace(/\s/g, '').match(hideBlockRegex);
        }
        if (!toHideSceneNamesArr || !toHideSceneNamesArr.length) {
            return null;
        }
        return toHideSceneNamesArr[1].split(',');
    },
    getMainAsset(assetUrls) {
        return getMainAsset(assetUrls);
    },
    changeObjectsVisibility(apiUrl, app, logic, objects, scene, show) {
        return __awaiter(this, void 0, void 0, function* () {
            if (objects === null || objects === void 0 ? void 0 : objects.length) {
                for (const obj of objects) {
                    const objectEntity = logic.object3ds.find(o => o.id === obj);
                    if (!objectEntity)
                        return;
                    const object = yield UtilsService.getObjectByEntity(scene, app, objectEntity, apiUrl);
                    if (object) {
                        object.visible = show;
                    }
                }
            }
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE1BQU0scUNBQXFDLEdBQUcsUUFBUSxDQUFDLEVBQUU7SUFDdkQsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxHQUFZLEVBQUU7SUFDN0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUMzQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDbkMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3hDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBQzNDLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsQ0FBWSxDQUFDO0FBQ3hFLENBQUMsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxFQUFFO0lBQy9CLE1BQU0sZUFBZSxHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQ25DLE1BQU0sVUFBVSxHQUFHLGlCQUFp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QUM7SUFFRCxZQUFZLENBQUUsU0FBUztRQUNyQixPQUFPLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUssdUJBQXVCLENBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJOztZQUNyRSxJQUFJLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNLEVBQUU7Z0JBQ25CLEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO29CQUN6QixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQzdELElBQUksQ0FBQyxZQUFZO3dCQUFFLE9BQU87b0JBQzFCLE1BQU0sTUFBTSxHQUFRLE1BQU0sWUFBWSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUMzRixJQUFJLE1BQU0sRUFBRTt3QkFDVixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFDdkI7aUJBQ0Y7YUFDRjtRQUNILENBQUM7S0FBQTtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBnZXRPYmplY3QzZE5hbWVzRnJvbU9iamVjdDNkU2NlbmVOYW1lID0gb2JqZWN0M2QgPT4ge1xyXG4gIHJldHVybiBvYmplY3QzZC5zY2VuZU5hbWUuc3BsaXQoJywnKS5tYXAobiA9PiBuLnRyaW0oKSk7XHJcbn07XHJcblxyXG5jb25zdCBpc01vYmlsZSA9ICgpOiBib29sZWFuID0+IHtcclxuICByZXR1cm4gKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkgfHxcclxuICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpIHx8XHJcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHxcclxuICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgfHxcclxuICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkgfHxcclxuICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSkgfHxcclxuICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSkgfHxcclxuICAgICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjcgJiYgd2luZG93LmlubmVySGVpZ2h0IDw9IDkwMCkpIGFzIGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRNYWluQXNzZXQgPSBhc3NldFVybHMgPT4ge1xyXG4gIGNvbnN0IHJ1bm5pbmdPbk1vYmlsZSA9IGlzTW9iaWxlKCk7XHJcbiAgY29uc3QgZ2x0ZlJlZ2V4cCA9IC8uK1xcLmdsdGYoXFwueHopPy87XHJcbiAgaWYgKHJ1bm5pbmdPbk1vYmlsZSkge1xyXG4gICAgY29uc3QgZm9yTW9iaWxlQXNzZXQgPSBhc3NldFVybHMuZmluZChhdSA9PiAvLioobW9iaWxlKS4qXFwuZ2x0ZihcXC54eik/Ly50ZXN0KGF1KSk7XHJcbiAgICBpZiAoZm9yTW9iaWxlQXNzZXQpIHtcclxuICAgICAgcmV0dXJuIGZvck1vYmlsZUFzc2V0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGFzc2V0VXJscy5maW5kKGF1ID0+IGdsdGZSZWdleHAudGVzdChhdSkpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYXNzZXRVcmxzLmZpbmQoYXUgPT4gZ2x0ZlJlZ2V4cC50ZXN0KGF1KSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRPYmplY3RzQnlFbnRpdHlJblNjZW5lID0gKHNjZW5lLCBlbnRpdHkpID0+IHtcclxuICBjb25zdCBzY2VuZU5hbWVzID0gZ2V0T2JqZWN0M2ROYW1lc0Zyb21PYmplY3QzZFNjZW5lTmFtZShlbnRpdHkpO1xyXG4gIGNvbnN0IG9iamVjdHMgPSBbXTtcclxuICBpZiAoIXNjZW5lTmFtZXMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gb2JqZWN0cztcclxuICB9XHJcbiAgZm9yIChjb25zdCBzY2VuZU5hbWUgb2Ygc2NlbmVOYW1lcykge1xyXG4gICAgY29uc3Qgb2JqZWN0ID0gVXRpbHNTZXJ2aWNlLmdldE9iamVjdEJ5TmFtZShzY2VuZSwgc2NlbmVOYW1lKTtcclxuICAgIGlmIChvYmplY3QpIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gIH1cclxuICByZXR1cm4gb2JqZWN0cztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVdGlsc1NlcnZpY2UgPSB7XHJcbiAgbG9hZFNjZW5lIChhcHAsIHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBhcHAubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGxvYWRlZCA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGFwcC5fdXBkYXRlTWF0ZXJpYWxzRnJvbUdMVEYgPT09ICdmdW5jdGlvbicpIGFwcC5fdXBkYXRlTWF0ZXJpYWxzRnJvbUdMVEYobG9hZGVkKTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgYXBwLl91cGRhdGVBbmltYXRpb25zRnJvbUdMVEYgPT09ICdmdW5jdGlvbicpIGFwcC5fdXBkYXRlQW5pbWF0aW9uc0Zyb21HTFRGKGxvYWRlZCwgbG9hZGVkLnNjZW5lKTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgYXBwLl91cGRhdGVTY2VuZUVudklCTCA9PT0gJ2Z1bmN0aW9uJykgYXBwLl91cGRhdGVTY2VuZUVudklCTChsb2FkZWQuc2NlbmUsIGFwcC5fZW52UlRhcmdldElCTCk7XHJcbiAgICAgICAgICByZXNvbHZlKGxvYWRlZC5zY2VuZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlID0+IHt9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBmaW5kT2JqZWN0M2RzQnlNYXRlcmlhbEVudGl0eSAoZGF0YSwgZW50aXR5KSB7XHJcbiAgICBjb25zdCBmb3VuZE9iamVjdDNkcyA9IFtdO1xyXG4gICAgY29uc3Qgb2JqZWN0M2RzID0gdGhpcy5kZWVwRmlsdGVyRGF0YUJ5S2V5KGRhdGEsICdvYmplY3QzZHMnKTtcclxuICAgIGNvbnN0IG93bk9iamVjdDNkcyA9IHRoaXMuZGVlcEZpbHRlckRhdGFCeUtleShkYXRhLCAnb3duT2JqZWN0M2RzJyk7XHJcbiAgICBjb25zdCBhbGxPYmplY3QzZHMgPSBbLi4ub2JqZWN0M2RzLCAuLi5vd25PYmplY3QzZHNdO1xyXG4gICAgYWxsT2JqZWN0M2RzLmZvckVhY2gobyA9PiB7XHJcbiAgICAgIGlmIChvLm1hdGVyaWFscyAmJiBvLm1hdGVyaWFscy5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBvLm1hdGVyaWFscy5maW5kKG0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbS5pZCA9PT0gZW50aXR5LmlkO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGZvdW5kT2JqZWN0M2RzLnB1c2gobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3VuZE9iamVjdDNkcztcclxuICB9LFxyXG5cclxuICAvKiogdXNlZCBpbiBvbGRlciBtZXRob2RzICovXHJcbiAgZ2V0T2JqZWN0QnlFbnRpdHkgKHNjZW5lLCBhcHAsIGVudGl0eSwgYXBpVXJsKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IG9iamVjdDogYW55ID0gc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGVudGl0eS5zY2VuZU5hbWUpO1xyXG4gICAgICBpZiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmVzb2x2ZShvYmplY3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChlbnRpdHkuYXNzZXQpIHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IGdldE1haW5Bc3NldChlbnRpdHkuYXNzZXQuYXNzZXRVcmxzKTtcclxuICAgICAgICAgIGNvbnN0IHNjZW5lID0gYXdhaXQgKDxhbnk+dGhpcy5sb2FkU2NlbmUoYXBwLCBgJHthcGlVcmx9JHt1cmx9YCkpO1xyXG4gICAgICAgICAgc2NlbmUudXNlckRhdGEuZW50aXR5ID0geyAuLi5lbnRpdHkgfTtcclxuICAgICAgICAgIHJlc29sdmUoc2NlbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldE9iamVjdHNCeUVudGl0eUluU2NlbmUgKHNjZW5lLCBlbnRpdHkpIHtcclxuICAgIHJldHVybiBnZXRPYmplY3RzQnlFbnRpdHlJblNjZW5lKHNjZW5lLCBlbnRpdHkpO1xyXG4gIH0sXHJcblxyXG4gIGdldE9iamVjdHNCeUVudGl0eUluRnJvbUFzc2V0IChzY2VuZSwgYXBwLCBlbnRpdHksIGFwaVVybCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYgKGVudGl0eS5hc3NldCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGdldE1haW5Bc3NldChlbnRpdHkuYXNzZXQuYXNzZXRVcmxzKTtcclxuICAgICAgICBjb25zdCBsb2FkZWRTY2VuZSA9IGF3YWl0ICg8YW55PnRoaXMubG9hZFNjZW5lKGFwcCwgYCR7YXBpVXJsfSR7dXJsfWApKTtcclxuICAgICAgICBsb2FkZWRTY2VuZS51c2VyRGF0YS5lbnRpdHkgPSB7IC4uLmVudGl0eSB9O1xyXG4gICAgICAgIHNjZW5lLmFkZChsb2FkZWRTY2VuZSk7XHJcbiAgICAgICAgcmVzb2x2ZShnZXRPYmplY3RzQnlFbnRpdHlJblNjZW5lKHNjZW5lLCBlbnRpdHkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZWplY3QoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0T2JqZWN0c0J5RW50aXR5IChzY2VuZSwgYXBwLCBlbnRpdHksIGFwaVVybCkge1xyXG4gICAgY29uc3QgZ2V0T2JqZWN0cyA9IGVudGl0eSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjZW5lTmFtZXMgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0M2ROYW1lc0Zyb21PYmplY3QzZFNjZW5lTmFtZShlbnRpdHkpO1xyXG4gICAgICBjb25zdCBvYmplY3RzID0gW107XHJcbiAgICAgIGlmICghc2NlbmVOYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0cztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGNvbnN0IHNjZW5lTmFtZSBvZiBzY2VuZU5hbWVzKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gVXRpbHNTZXJ2aWNlLmdldE9iamVjdEJ5TmFtZShzY2VuZSwgc2NlbmVOYW1lKTtcclxuICAgICAgICBpZiAob2JqZWN0KSBvYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb2JqZWN0cztcclxuICAgIH07XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgb2JqZWN0cyA9IGdldE9iamVjdHMoZW50aXR5KTtcclxuICAgICAgaWYgKG9iamVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmVzb2x2ZShvYmplY3RzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZW50aXR5LmFzc2V0KSB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSBnZXRNYWluQXNzZXQoZW50aXR5LmFzc2V0LmFzc2V0VXJscyk7XHJcbiAgICAgICAgICBjb25zdCBsb2FkZWRTY2VuZSA9IGF3YWl0ICg8YW55PnRoaXMubG9hZFNjZW5lKGFwcCwgYCR7YXBpVXJsfSR7dXJsfWApKTtcclxuICAgICAgICAgIGxvYWRlZFNjZW5lLnVzZXJEYXRhLmVudGl0eSA9IHsgLi4uZW50aXR5IH07XHJcbiAgICAgICAgICBzY2VuZS5hZGQobG9hZGVkU2NlbmUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShnZXRPYmplY3RzKGVudGl0eSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldE1hdGVyaWFsQnlFbnRpdHkgKHNjZW5lLCBhcHAsIGVudGl0eSwgYXBpVXJsKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgbWF0ZXJpYWw6IGFueSA9IHRoaXMuZ2V0TWF0ZXJpYWxCeU5hbWUoc2NlbmUsIGVudGl0eS5zY2VuZU5hbWUpO1xyXG4gICAgICBpZiAobWF0ZXJpYWwpIHtcclxuICAgICAgICByZXNvbHZlKG1hdGVyaWFsKTtcclxuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuYXNzZXQpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBlbnRpdHkuYXNzZXQuYXNzZXRVcmxzLmZpbmQoYXUgPT4gLy4rXFwuZ2x0Zi8udGVzdChhdSkpO1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gYXdhaXQgKDxhbnk+dGhpcy5sb2FkU2NlbmUoYXBwLCBgJHthcGlVcmx9JHt1cmx9YCkpO1xyXG4gICAgICAgIHNjZW5lLnVzZXJEYXRhLmVudGl0eSA9IHsgLi4uZW50aXR5IH07XHJcbiAgICAgICAgc2NlbmUuYWRkKHNjZW5lKTtcclxuICAgICAgICBtYXRlcmlhbCA9IHRoaXMuZ2V0TWF0ZXJpYWxCeU5hbWUoc2NlbmUsIGVudGl0eS5zY2VuZU5hbWUpO1xyXG4gICAgICAgIHJlc29sdmUobWF0ZXJpYWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBmaW5kUGFyZW50T2JqZWN0QnlPYmplY3QzZEVudGl0eSAoZGF0YSwgZW50aXR5KSB7XHJcbiAgICBsZXQgcGFyZW50O1xyXG4gICAgY29uc3Qgb2JqZWN0M2RzID0gdGhpcy5kZWVwRmlsdGVyRGF0YUJ5S2V5KGRhdGEsICdvYmplY3QzZHMnKTtcclxuICAgIGNvbnN0IG93bk9iamVjdDNkcyA9IHRoaXMuZGVlcEZpbHRlckRhdGFCeUtleShkYXRhLCAnb3duT2JqZWN0M2RzJyk7XHJcbiAgICBjb25zdCBhbGxPYmplY3QzZHMgPSBbLi4ub2JqZWN0M2RzLCAuLi5vd25PYmplY3QzZHNdO1xyXG4gICAgYWxsT2JqZWN0M2RzLmZvckVhY2gobyA9PiB7XHJcbiAgICAgIGlmIChvLm9iamVjdDNkcyAmJiBvLm9iamVjdDNkcy5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBvLm9iamVjdDNkcy5maW5kKG8gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gby5pZCA9PT0gZW50aXR5LmlkO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHBhcmVudCA9IG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG8ub3duT2JqZWN0M2RzICYmIG8ub3duT2JqZWN0M2RzLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG8ub3duT2JqZWN0M2RzLmZpbmQobyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBvLmlkID09PSBlbnRpdHkuaWQ7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcGFyZW50ID0gbztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBhcmVudDtcclxuICB9LFxyXG5cclxuICB1cGRhdGVXb3JsZE1hdGVyaWFsQ29uY2VybmluZ1RleHR1cmUgKGFwcCwgdGV4dHVyZSkge1xyXG4gICAgLy8gdXBkYXRlIHdvcmxkIG1hdGVyaWFsIGlmIGl0IGlzIHVzaW5nIHRoaXMgdGV4dHVyZVxyXG4gICAgY29uc3Qgd01hdCA9IGFwcC53b3JsZE1hdGVyaWFsO1xyXG4gICAgaWYgKHdNYXQpIHtcclxuICAgICAgZm9yIChjb25zdCB0ZXh0dXJlTmFtZSBpbiB3TWF0Lm5vZGVUZXh0dXJlcykge1xyXG4gICAgICAgIGlmICh3TWF0Lm5vZGVUZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPT09IHRleHR1cmUpIHtcclxuICAgICAgICAgIGFwcC51cGRhdGVFbnZpcm9ubWVudCh3TWF0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRPYmplY3RCeVNjZW5lTmFtZUluRW50aXR5IChzY2VuZSwgc2NlbmVOYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBvYmogPSBudWxsO1xyXG4gICAgc2NlbmUudHJhdmVyc2UoYyA9PiB7XHJcbiAgICAgIGlmIChjICYmIGMudXNlckRhdGEuZW50aXR5ICYmIGMudXNlckRhdGEuZW50aXR5LnNjZW5lTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNhbml0aXplU3RyKGMudXNlckRhdGEuZW50aXR5LnNjZW5lTmFtZSkgPT09IHRoaXMuc2FuaXRpemVTdHIoc2NlbmVOYW1lKSkgb2JqID0gYztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH0sXHJcblxyXG4gIHNhbml0aXplU3RyIChzdHI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0clxyXG4gICAgICAucmVwbGFjZSgn0YEnLCAnYycpIC8vIHJ1c3NpYW4g0YFcclxuICAgICAgLnJlcGxhY2UoJ9ChJywgJ0MnKSAvLyBydXNzaWFuINChXHJcbiAgICAgIC5yZXBsYWNlKCfQtScsICdlJykgLy8gcnVzc2lhbiDQtVxyXG4gICAgICAucmVwbGFjZSgn0JUnLCAnRScpIC8vIHJ1c3NpYW4g0JVcclxuICAgICAgLnJlcGxhY2UoJ9CwJywgJ2EnKSAvLyBydXNzaWFuINCwXHJcbiAgICAgIC5yZXBsYWNlKCfQkCcsICdBJykgLy8gcnVzc2lhbiDQkFxyXG4gICAgICAucmVwbGFjZSgn0L4nLCAnbycpIC8vIHJ1c3NpYW4g0L5cclxuICAgICAgLnJlcGxhY2UoJ9CeJywgJ08nKTsgLy8gcnVzc2lhbiDQnlxyXG4gIH0sXHJcblxyXG4gIGdldE9iamVjdEJ5TmFtZSAoc2NlbmUsIG5hbWUpIHtcclxuICAgIGxldCBvYmplY3QgPSBudWxsO1xyXG4gICAgbmFtZSA9IHRoaXMuc2FuaXRpemVTdHIobmFtZSk7XHJcbiAgICBzY2VuZS50cmF2ZXJzZShvID0+IHtcclxuICAgICAgaWYgKG8gJiYgby5uYW1lICYmIHRoaXMuc2FuaXRpemVTdHIoby5uYW1lKSA9PT0gbmFtZSkge1xyXG4gICAgICAgIG9iamVjdCA9IG87XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iamVjdDtcclxuICB9LFxyXG5cclxuICBnZXRNYXRlcmlhbEJ5TmFtZSAoc2NlbmUsIG5hbWUpIHtcclxuICAgIGxldCBtYXRlcmlhbCA9IG51bGw7XHJcbiAgICBzY2VuZS50cmF2ZXJzZShjID0+IHtcclxuICAgICAgaWYgKGMgJiYgYy5tYXRlcmlhbCAmJiBjLm1hdGVyaWFsLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICBtYXRlcmlhbCA9IGMubWF0ZXJpYWw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFsO1xyXG4gIH0sXHJcblxyXG4gIGRlZXBGaWx0ZXJEYXRhQnlLZXkgKGRhdGEsIGZpbHRlcmVkS2V5KSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IFtdO1xyXG4gICAgY29uc3QgZmlsdGVyID0gZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgIF8uZm9yRWFjaChkYXRhLCB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGZpbHRlcih2YWx1ZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgXy5mb3JFYWNoKGRhdGEsICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IGZpbHRlcmVkS2V5ICYmIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh2YWx1ZSwgdiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaCh2KTtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIodik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHZhbHVlLCB2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIodik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBmaWx0ZXJlZEtleSAmJiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZpbHRlcihkYXRhKTtcclxuICAgIHJldHVybiBfLnVuaXFCeShmaWx0ZXJlZCwgZiA9PiB7XHJcbiAgICAgIHJldHVybiBmLmlkO1xyXG4gICAgfSkuZmlsdGVyKGYgPT4gZi5pZCk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0T2JqZWN0M2ROYW1lc0Zyb21PYmplY3QzZFNjZW5lTmFtZSAob2JqZWN0M2QpIHtcclxuICAgIHJldHVybiBnZXRPYmplY3QzZE5hbWVzRnJvbU9iamVjdDNkU2NlbmVOYW1lKG9iamVjdDNkKTtcclxuICB9LFxyXG5cclxuICBjaGFuZ2VNYXRlcmlhbE9uT2JqZWN0M2RFbnRpdGllcyAoc2NlbmUsIG9iamVjdDNkRW50aXRpZXMsIG1hdGVyaWFsKSB7XHJcbiAgICBvYmplY3QzZEVudGl0aWVzLmZvckVhY2gob2JqZWN0M2QgPT4ge1xyXG4gICAgICAvLyBpbiBjYXNlIHdlIGhhdmUgc2V2ZXJhbCBvYmplY3QgbmFtZXMsIHNwbGl0dGVkIGJ5ICcsJ1xyXG4gICAgICBjb25zdCBvYmplY3QzZFNjZW5lTmFtZXMgPSBnZXRPYmplY3QzZE5hbWVzRnJvbU9iamVjdDNkU2NlbmVOYW1lKG9iamVjdDNkKTtcclxuXHJcbiAgICAgIG9iamVjdDNkU2NlbmVOYW1lcy5mb3JFYWNoKHNuID0+IHtcclxuICAgICAgICBvYmplY3QzZCA9IFV0aWxzU2VydmljZS5nZXRPYmplY3RCeU5hbWUoc2NlbmUsIHNuKTtcclxuICAgICAgICBpZiAob2JqZWN0M2QpIHtcclxuICAgICAgICAgIG9iamVjdDNkLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXRPYmplY3RNZW51TWF0ZXJpYWwgLSBvYmplY3QzZCAke3NufSBub3QgZm91bmRgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcG9zaXRpb25zRXF1YWwgKHBvc2l0aW9uQSwgcG9zaXRpb25CKSB7XHJcbiAgICByZXR1cm4gcG9zaXRpb25BICYmIHBvc2l0aW9uQiAmJiBwb3NpdGlvbkEueCA9PT0gcG9zaXRpb25CLnggJiYgcG9zaXRpb25BLnkgPT09IHBvc2l0aW9uQi55ICYmIHBvc2l0aW9uQS56ID09PSBwb3NpdGlvbkIuejtcclxuICB9LFxyXG5cclxuICBzd2l0Y2hPYmplY3RzR2V0VG9IaWRlT2JqZWN0M2RTY2VuZU5hbWVzIChtZW51TG9naWNPYmplY3QpIHtcclxuICAgIGxldCBoaWRlQmxvY2tSZWdleCA9IC8oPzpoaWRlOikoLispKD86c2hvdzopL2k7XHJcblxyXG4gICAgbGV0IHRvSGlkZVNjZW5lTmFtZXNBcnIgPSBtZW51TG9naWNPYmplY3Quc2NlbmVOYW1lLnJlcGxhY2UoL1xccy9nLCAnJykubWF0Y2goaGlkZUJsb2NrUmVnZXgpO1xyXG5cclxuICAgIGlmICghdG9IaWRlU2NlbmVOYW1lc0FyciB8fCAhdG9IaWRlU2NlbmVOYW1lc0Fyci5sZW5ndGgpIHtcclxuICAgICAgaGlkZUJsb2NrUmVnZXggPSAvKD86aGlkZTopKC4rKS9pO1xyXG4gICAgICB0b0hpZGVTY2VuZU5hbWVzQXJyID0gbWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZS5yZXBsYWNlKC9cXHMvZywgJycpLm1hdGNoKGhpZGVCbG9ja1JlZ2V4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRvSGlkZVNjZW5lTmFtZXNBcnIgfHwgIXRvSGlkZVNjZW5lTmFtZXNBcnIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b0hpZGVTY2VuZU5hbWVzQXJyWzFdLnNwbGl0KCcsJyk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0TWFpbkFzc2V0IChhc3NldFVybHMpIHtcclxuICAgIHJldHVybiBnZXRNYWluQXNzZXQoYXNzZXRVcmxzKTtcclxuICB9LFxyXG5cclxuICBhc3luYyBjaGFuZ2VPYmplY3RzVmlzaWJpbGl0eSAoYXBpVXJsLCBhcHAsIGxvZ2ljLCBvYmplY3RzLCBzY2VuZSwgc2hvdykge1xyXG4gICAgaWYgKG9iamVjdHM/Lmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0RW50aXR5ID0gbG9naWMub2JqZWN0M2RzLmZpbmQobyA9PiBvLmlkID09PSBvYmopO1xyXG4gICAgICAgIGlmICghb2JqZWN0RW50aXR5KSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0OiBhbnkgPSBhd2FpdCBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlFbnRpdHkoc2NlbmUsIGFwcCwgb2JqZWN0RW50aXR5LCBhcGlVcmwpO1xyXG4gICAgICAgIGlmIChvYmplY3QpIHtcclxuICAgICAgICAgIG9iamVjdC52aXNpYmxlID0gc2hvdztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==