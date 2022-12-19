var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UtilsService } from '../services/utils.service';
export const setObjectsAoTexture = (scene, app, appData, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    ///
    const object3dEntities = UtilsService.findObject3dsByMaterialEntity(appData, menuLogicObject);
    for (const object3d of object3dEntities) {
        // in case we have several object names, splitted by ','
        const object3dSceneNames = object3d.sceneName.split(',').map(n => n.trim());
        for (const sn of object3dSceneNames) {
            const object3d = UtilsService.getObjectByName(scene, sn);
            if (object3d && object3d.material) {
                const material = object3d.material;
                const textureKey = Object.keys(material.nodeTextures).find(key => /^.*AO_Body.*$/gi.test(material.nodeTextures[key].name));
                // find AO_Body.jpg
                let textureUrl = '';
                scene.traverse(c => {
                    if (c &&
                        c.userData.entity &&
                        c.userData.entity.asset &&
                        c.userData.entity.asset.assetUrls &&
                        c.userData.entity.asset.assetUrls.length) {
                        const foundTextureUrl = c.userData.entity.asset.assetUrls.find(au => /AO(_Metal)?_Body\.jpg$/gi.test(au));
                        if (foundTextureUrl) {
                            textureUrl = foundTextureUrl;
                        }
                    }
                });
                if (!textureKey) {
                    console.warn(`setObjectsAoTexture object3d ${sn} textureKey undefined`);
                }
                if (textureUrl) {
                    const loader = new v3d.ImageLoader();
                    loader.setCrossOrigin('Anonymous');
                    const load = new Promise((resolve, reject) => {
                        loader.load(`${apiUrl}${textureUrl}`, res => resolve(res));
                    });
                    const image = yield load;
                    const texture = material.nodeTextures[textureKey];
                    texture.image = image;
                    texture.format = 1023;
                    texture.needsUpdate = true;
                    texture.format = v3d.RGBFormat;
                    texture.needsUpdate = true;
                    UtilsService.updateWorldMaterialConcerningTexture(app, texture);
                }
                else {
                    console.warn(`setObjectsAoTexture object3d ${sn} textureUrl not found`);
                }
            }
            else {
                console.warn(`setObjectsAoTexture object3d ${sn} not found or its material does not exist`);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9iamVjdHMtYW8tdGV4dHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldC1vYmplY3RzLWFvLXRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSXpELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQ2pDLEtBQUssRUFDTCxHQUFHLEVBQ0gsT0FBTyxFQUNQLGVBQWUsRUFDZixNQUFNLEVBQ04sRUFBRTtJQUNGLEdBQUc7SUFDSCxNQUFNLGdCQUFnQixHQUFHLFlBQVksQ0FBQyw2QkFBNkIsQ0FDakUsT0FBTyxFQUNQLGVBQWUsQ0FDaEIsQ0FBQztJQUVGLEtBQUssTUFBTSxRQUFRLElBQUksZ0JBQWdCLEVBQUU7UUFDdkMsd0RBQXdEO1FBQ3hELE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFNUUsS0FBSyxNQUFNLEVBQUUsSUFBSSxrQkFBa0IsRUFBRTtZQUNuQyxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN6RCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUNqQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUVuQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDL0QsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ3hELENBQUM7Z0JBRUYsbUJBQW1CO2dCQUNuQixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pCLElBQ0UsQ0FBQzt3QkFDRCxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU07d0JBQ2pCLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQ3ZCLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTO3dCQUNqQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFDeEM7d0JBQ0EsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDbEUsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNwQyxDQUFDO3dCQUNGLElBQUksZUFBZSxFQUFFOzRCQUNuQixVQUFVLEdBQUcsZUFBZSxDQUFDO3lCQUM5QjtxQkFDRjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztpQkFDekU7Z0JBRUQsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3JDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO3dCQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLFVBQVUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzdELENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDO29CQUN6QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNsRCxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDdEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3RCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUMzQixPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUMzQixZQUFZLENBQUMsb0NBQW9DLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNqRTtxQkFBTTtvQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLHVCQUF1QixDQUFDLENBQUM7aUJBQ3pFO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO2FBQzdGO1NBQ0Y7S0FDRjtBQUNILENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IHYzZDogYW55O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE9iamVjdHNBb1RleHR1cmUgPSBhc3luYyAoXHJcbiAgc2NlbmUsIFxyXG4gIGFwcCxcclxuICBhcHBEYXRhLFxyXG4gIG1lbnVMb2dpY09iamVjdCxcclxuICBhcGlVcmxcclxuKSA9PiB7XHJcbiAgLy8vXHJcbiAgY29uc3Qgb2JqZWN0M2RFbnRpdGllcyA9IFV0aWxzU2VydmljZS5maW5kT2JqZWN0M2RzQnlNYXRlcmlhbEVudGl0eShcclxuICAgIGFwcERhdGEsXHJcbiAgICBtZW51TG9naWNPYmplY3RcclxuICApO1xyXG5cclxuICBmb3IgKGNvbnN0IG9iamVjdDNkIG9mIG9iamVjdDNkRW50aXRpZXMpIHtcclxuICAgIC8vIGluIGNhc2Ugd2UgaGF2ZSBzZXZlcmFsIG9iamVjdCBuYW1lcywgc3BsaXR0ZWQgYnkgJywnXHJcbiAgICBjb25zdCBvYmplY3QzZFNjZW5lTmFtZXMgPSBvYmplY3QzZC5zY2VuZU5hbWUuc3BsaXQoJywnKS5tYXAobiA9PiBuLnRyaW0oKSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBzbiBvZiBvYmplY3QzZFNjZW5lTmFtZXMpIHtcclxuICAgICAgY29uc3Qgb2JqZWN0M2QgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlOYW1lKHNjZW5lLCBzbik7XHJcbiAgICAgIGlmIChvYmplY3QzZCAmJiBvYmplY3QzZC5tYXRlcmlhbCkge1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gb2JqZWN0M2QubWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVLZXkgPSBPYmplY3Qua2V5cyhtYXRlcmlhbC5ub2RlVGV4dHVyZXMpLmZpbmQoa2V5ID0+XHJcbiAgICAgICAgICAvXi4qQU9fQm9keS4qJC9naS50ZXN0KG1hdGVyaWFsLm5vZGVUZXh0dXJlc1trZXldLm5hbWUpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCBBT19Cb2R5LmpwZ1xyXG4gICAgICAgIGxldCB0ZXh0dXJlVXJsID0gJyc7XHJcbiAgICAgICAgc2NlbmUudHJhdmVyc2UoYyA9PiB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGMgJiZcclxuICAgICAgICAgICAgYy51c2VyRGF0YS5lbnRpdHkgJiZcclxuICAgICAgICAgICAgYy51c2VyRGF0YS5lbnRpdHkuYXNzZXQgJiZcclxuICAgICAgICAgICAgYy51c2VyRGF0YS5lbnRpdHkuYXNzZXQuYXNzZXRVcmxzICYmXHJcbiAgICAgICAgICAgIGMudXNlckRhdGEuZW50aXR5LmFzc2V0LmFzc2V0VXJscy5sZW5ndGhcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3VuZFRleHR1cmVVcmwgPSBjLnVzZXJEYXRhLmVudGl0eS5hc3NldC5hc3NldFVybHMuZmluZChhdSA9PlxyXG4gICAgICAgICAgICAgIC9BTyhfTWV0YWwpP19Cb2R5XFwuanBnJC9naS50ZXN0KGF1KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZm91bmRUZXh0dXJlVXJsKSB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZVVybCA9IGZvdW5kVGV4dHVyZVVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXRleHR1cmVLZXkpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0T2JqZWN0c0FvVGV4dHVyZSBvYmplY3QzZCAke3NufSB0ZXh0dXJlS2V5IHVuZGVmaW5lZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRleHR1cmVVcmwpIHtcclxuICAgICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyB2M2QuSW1hZ2VMb2FkZXIoKTtcclxuICAgICAgICAgIGxvYWRlci5zZXRDcm9zc09yaWdpbignQW5vbnltb3VzJyk7XHJcbiAgICAgICAgICBjb25zdCBsb2FkID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkZXIubG9hZChgJHthcGlVcmx9JHt0ZXh0dXJlVXJsfWAsIHJlcyA9PiByZXNvbHZlKHJlcykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWQ7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gbWF0ZXJpYWwubm9kZVRleHR1cmVzW3RleHR1cmVLZXldO1xyXG4gICAgICAgICAgdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgICAgdGV4dHVyZS5mb3JtYXQgPSAxMDIzO1xyXG4gICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IHYzZC5SR0JGb3JtYXQ7XHJcbiAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgIFV0aWxzU2VydmljZS51cGRhdGVXb3JsZE1hdGVyaWFsQ29uY2VybmluZ1RleHR1cmUoYXBwLCB0ZXh0dXJlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBzZXRPYmplY3RzQW9UZXh0dXJlIG9iamVjdDNkICR7c259IHRleHR1cmVVcmwgbm90IGZvdW5kYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybihgc2V0T2JqZWN0c0FvVGV4dHVyZSBvYmplY3QzZCAke3NufSBub3QgZm91bmQgb3IgaXRzIG1hdGVyaWFsIGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==