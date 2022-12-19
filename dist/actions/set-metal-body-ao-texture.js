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
export const setMetalBodyAoTexture = (scene, app, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    let metalBody = UtilsService.getObjectByName(scene, 'Metal_Body');
    const material = metalBody.material;
    let textureKey = Object.keys(material.nodeTextures).find(key => /^.*AO_Body\..*$/gi.test(material.nodeTextures[key].name));
    if (!textureKey) {
        textureKey = Object.keys(material.nodeTextures).find(key => /^.*AO_Body.*$/gi.test(material.nodeTextures[key].name));
    }
    // find AO_Body.jpg
    let textureUrl = '';
    scene.traverse(c => {
        if (c && c.userData.entity && c.userData.entity.asset && c.userData.entity.asset.assetUrls && c.userData.entity.asset.assetUrls.length) {
            const url = c.userData.entity.asset.assetUrls.find(au => /AO(_Metal)?_Body\.jpg$/gi.test(au));
            if (url && UtilsService.getObjectByName(scene, 'Metal_Body')) {
                if (!textureUrl) {
                    textureUrl = url;
                }
            }
        }
    });
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW1ldGFsLWJvZHktYW8tdGV4dHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldC1tZXRhbC1ib2R5LWFvLXRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSXpELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLENBQU8sS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNoRSxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRSxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQ3BDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFM0gsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNmLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3RIO0lBRUQsbUJBQW1CO0lBQ25CLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNwQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3RJLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUYsSUFBSSxHQUFHLElBQUksWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2YsVUFBVSxHQUFHLEdBQUcsQ0FBQztpQkFDbEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLFVBQVUsRUFBRTtRQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxVQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUM7UUFDekIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDL0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDM0IsWUFBWSxDQUFDLG9DQUFvQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNqRTtBQUNILENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IHYzZDogYW55O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE1ldGFsQm9keUFvVGV4dHVyZSA9IGFzeW5jIChzY2VuZSwgYXBwLCBhcGlVcmwpID0+IHtcclxuICBsZXQgbWV0YWxCb2R5ID0gVXRpbHNTZXJ2aWNlLmdldE9iamVjdEJ5TmFtZShzY2VuZSwgJ01ldGFsX0JvZHknKTtcclxuICBjb25zdCBtYXRlcmlhbCA9IG1ldGFsQm9keS5tYXRlcmlhbDtcclxuICBsZXQgdGV4dHVyZUtleSA9IE9iamVjdC5rZXlzKG1hdGVyaWFsLm5vZGVUZXh0dXJlcykuZmluZChrZXkgPT4gL14uKkFPX0JvZHlcXC4uKiQvZ2kudGVzdChtYXRlcmlhbC5ub2RlVGV4dHVyZXNba2V5XS5uYW1lKSk7XHJcblxyXG4gIGlmICghdGV4dHVyZUtleSkge1xyXG4gICAgdGV4dHVyZUtleSA9IE9iamVjdC5rZXlzKG1hdGVyaWFsLm5vZGVUZXh0dXJlcykuZmluZChrZXkgPT4gL14uKkFPX0JvZHkuKiQvZ2kudGVzdChtYXRlcmlhbC5ub2RlVGV4dHVyZXNba2V5XS5uYW1lKSk7XHJcbiAgfVxyXG5cclxuICAvLyBmaW5kIEFPX0JvZHkuanBnXHJcbiAgbGV0IHRleHR1cmVVcmwgPSAnJztcclxuICBzY2VuZS50cmF2ZXJzZShjID0+IHtcclxuICAgIGlmIChjICYmIGMudXNlckRhdGEuZW50aXR5ICYmIGMudXNlckRhdGEuZW50aXR5LmFzc2V0ICYmIGMudXNlckRhdGEuZW50aXR5LmFzc2V0LmFzc2V0VXJscyAmJiBjLnVzZXJEYXRhLmVudGl0eS5hc3NldC5hc3NldFVybHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGMudXNlckRhdGEuZW50aXR5LmFzc2V0LmFzc2V0VXJscy5maW5kKGF1ID0+IC9BTyhfTWV0YWwpP19Cb2R5XFwuanBnJC9naS50ZXN0KGF1KSk7XHJcbiAgICAgIGlmICh1cmwgJiYgVXRpbHNTZXJ2aWNlLmdldE9iamVjdEJ5TmFtZShzY2VuZSwgJ01ldGFsX0JvZHknKSkge1xyXG4gICAgICAgIGlmICghdGV4dHVyZVVybCkge1xyXG4gICAgICAgICAgdGV4dHVyZVVybCA9IHVybDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKHRleHR1cmVVcmwpIHtcclxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyB2M2QuSW1hZ2VMb2FkZXIoKTtcclxuICAgIGxvYWRlci5zZXRDcm9zc09yaWdpbignQW5vbnltb3VzJyk7XHJcbiAgICBjb25zdCBsb2FkID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsb2FkZXIubG9hZChgJHthcGlVcmx9JHt0ZXh0dXJlVXJsfWAsIHJlcyA9PiByZXNvbHZlKHJlcykpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWQ7XHJcbiAgICBjb25zdCB0ZXh0dXJlID0gbWF0ZXJpYWwubm9kZVRleHR1cmVzW3RleHR1cmVLZXldO1xyXG4gICAgdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG4gICAgdGV4dHVyZS5mb3JtYXQgPSAxMDIzO1xyXG4gICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICB0ZXh0dXJlLmZvcm1hdCA9IHYzZC5SR0JGb3JtYXQ7XHJcbiAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgIFV0aWxzU2VydmljZS51cGRhdGVXb3JsZE1hdGVyaWFsQ29uY2VybmluZ1RleHR1cmUoYXBwLCB0ZXh0dXJlKTtcclxuICB9XHJcbn07XHJcbiJdfQ==