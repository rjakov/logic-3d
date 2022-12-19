var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import gsap from 'gsap';
export const chooseItemWithZoom = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { actionArguments, apiUrl, app, logic, scene } = args;
    if (!actionArguments || !scene) {
        console.warn(`Action: [chooseItem] actionArguments or scene is absent`);
        return;
    }
    let { object3d } = actionArguments;
    if (!object3d) {
        console.warn(`Action: [chooseItem] object is absent`);
        return;
    }
    const objectEntity = logic.object3ds.find(o => o.id === object3d);
    if (!objectEntity) {
        console.warn(`Action: [chooseItem] object with id ${object3d} is not attached to logic`);
        return;
    }
    let cameraObjectSceneName = 'Camera_Main';
    if (objectEntity.sceneName.includes('Windows')) {
        cameraObjectSceneName = `Camera_Windows_0${objectEntity.sceneName.substring(objectEntity.sceneName.length - 2)}`;
    }
    if (objectEntity.sceneName.includes('Entry_Door')) {
        cameraObjectSceneName = 'Camera_Entry_Door';
    }
    if (objectEntity.sceneName.includes('Patio_Door')) {
        cameraObjectSceneName = 'Camera_Patio_Door';
    }
    if (objectEntity.sceneName.includes('Siding')) {
        cameraObjectSceneName = 'Camera_Siding';
    }
    // camera object by object entity scene name
    // let objectEntityMeshPosition = scene.getObjectByName(objectEntity.sceneName).position
    let newCamera = scene.getObjectByName(cameraObjectSceneName);
    // let newCameraPosition = scene.getObjectByName(cameraObjectSceneName).position
    // let newControlsCameraPosition = scene.getObjectByName(cameraObjectSceneName).position
    // let newCameraControlsPosition = scene.getObjectByName(cameraObjectSceneName).controls.orbitTarget.position
    // let aabb = new v3d.Box3().setFromObject( objectEntityMesh );
    // let center = aabb.getCenter( new v3d.Vector3() );
    // let size = aabb.getSize( new v3d.Vector3() );
    // animation
    gsap.to(app.camera.controls.orbitTarget.position, Object.assign({ duration: 1 }, newCamera.controls.orbitTarget.position));
    gsap.to(app.camera.position, Object.assign({ duration: 1 }, newCamera.position));
    function animate() {
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    //
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvb3NlLWl0ZW0td2l0aC16b29tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbnMvY2hvb3NlLWl0ZW0td2l0aC16b29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLGFBQWE7QUFDYixPQUFPLElBQUksTUFBTSxNQUFNLENBQ3BCO0FBSUgsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBTyxJQUE0QixFQUFFLEVBQUU7SUFDdkUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFFMUQsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUM7UUFDeEUsT0FBTztLQUNSO0lBRUQsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLGVBQWUsQ0FBQztJQUNuQyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3RELE9BQU87S0FDUjtJQUVELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztJQUVsRSxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLFFBQVEsMkJBQTJCLENBQUMsQ0FBQztRQUN6RixPQUFPO0tBQ1I7SUFFSCxJQUFJLHFCQUFxQixHQUFHLGFBQWEsQ0FBQztJQUV4QyxJQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFDO1FBQzFDLHFCQUFxQixHQUFHLG1CQUFtQixZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ3BIO0lBQ0QsSUFBRyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUM5QyxxQkFBcUIsR0FBRyxtQkFBbUIsQ0FBQztLQUMvQztJQUNELElBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDOUMscUJBQXFCLEdBQUcsbUJBQW1CLENBQUM7S0FDL0M7SUFDRCxJQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzFDLHFCQUFxQixHQUFHLGVBQWUsQ0FBQztLQUMzQztJQUVELDRDQUE0QztJQUM1Qyx3RkFBd0Y7SUFDeEYsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQzVELGdGQUFnRjtJQUNoRix3RkFBd0Y7SUFDeEYsNkdBQTZHO0lBRTdHLCtEQUErRDtJQUMvRCxvREFBb0Q7SUFDcEQsZ0RBQWdEO0lBRWhELFlBQVk7SUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLGtCQUM5QyxRQUFRLEVBQUUsQ0FBQyxJQUNSLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFHMUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLGtCQUN6QixRQUFRLEVBQUUsQ0FBQyxJQUNSLFNBQVMsQ0FBQyxRQUFRLEVBUXJCLENBQUE7SUFHRixTQUFTLE9BQU87UUFDZCxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUIsRUFBRTtBQUNOLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhlY3V0ZUFjdGlvbkFyZ3VtZW50cyB9IGZyb20gJy4uL21vZGVsL2V4ZWN1dGUtYWN0aW9uLWFyZ3VtZW50cyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcclxuICA7XHJcbmRlY2xhcmUgY29uc3QgdjNkOiBhbnk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNob29zZUl0ZW1XaXRoWm9vbSA9IGFzeW5jIChhcmdzOiBFeGVjdXRlQWN0aW9uQXJndW1lbnRzKSA9PiB7XHJcbiAgY29uc3QgeyBhY3Rpb25Bcmd1bWVudHMsIGFwaVVybCwgYXBwLCBsb2dpYywgc2NlbmUgfSA9IGFyZ3M7XHJcblxyXG4gICAgaWYgKCFhY3Rpb25Bcmd1bWVudHMgfHwgIXNjZW5lKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgQWN0aW9uOiBbY2hvb3NlSXRlbV0gYWN0aW9uQXJndW1lbnRzIG9yIHNjZW5lIGlzIGFic2VudGApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHsgb2JqZWN0M2QgfSA9IGFjdGlvbkFyZ3VtZW50cztcclxuICAgIGlmICghb2JqZWN0M2QpIHtcclxuICAgICAgY29uc29sZS53YXJuKGBBY3Rpb246IFtjaG9vc2VJdGVtXSBvYmplY3QgaXMgYWJzZW50YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYmplY3RFbnRpdHkgPSBsb2dpYy5vYmplY3QzZHMuZmluZChvID0+IG8uaWQgPT09IG9iamVjdDNkKTtcclxuXHJcbiAgICBpZiAoIW9iamVjdEVudGl0eSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYEFjdGlvbjogW2Nob29zZUl0ZW1dIG9iamVjdCB3aXRoIGlkICR7b2JqZWN0M2R9IGlzIG5vdCBhdHRhY2hlZCB0byBsb2dpY2ApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIGxldCBjYW1lcmFPYmplY3RTY2VuZU5hbWUgPSAnQ2FtZXJhX01haW4nO1xyXG5cclxuICAgIGlmKG9iamVjdEVudGl0eS5zY2VuZU5hbWUuaW5jbHVkZXMoJ1dpbmRvd3MnKSl7XHJcbiAgICAgICAgY2FtZXJhT2JqZWN0U2NlbmVOYW1lID0gYENhbWVyYV9XaW5kb3dzXzAke29iamVjdEVudGl0eS5zY2VuZU5hbWUuc3Vic3RyaW5nKG9iamVjdEVudGl0eS5zY2VuZU5hbWUubGVuZ3RoIC0gMil9YDtcclxuICAgIH1cclxuICAgIGlmKG9iamVjdEVudGl0eS5zY2VuZU5hbWUuaW5jbHVkZXMoJ0VudHJ5X0Rvb3InKSkge1xyXG4gICAgICAgIGNhbWVyYU9iamVjdFNjZW5lTmFtZSA9ICdDYW1lcmFfRW50cnlfRG9vcic7XHJcbiAgICB9XHJcbiAgICBpZihvYmplY3RFbnRpdHkuc2NlbmVOYW1lLmluY2x1ZGVzKCdQYXRpb19Eb29yJykpIHtcclxuICAgICAgICBjYW1lcmFPYmplY3RTY2VuZU5hbWUgPSAnQ2FtZXJhX1BhdGlvX0Rvb3InO1xyXG4gICAgfVxyXG4gICAgaWYob2JqZWN0RW50aXR5LnNjZW5lTmFtZS5pbmNsdWRlcygnU2lkaW5nJykpIHtcclxuICAgICAgICBjYW1lcmFPYmplY3RTY2VuZU5hbWUgPSAnQ2FtZXJhX1NpZGluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FtZXJhIG9iamVjdCBieSBvYmplY3QgZW50aXR5IHNjZW5lIG5hbWVcclxuICAgIC8vIGxldCBvYmplY3RFbnRpdHlNZXNoUG9zaXRpb24gPSBzY2VuZS5nZXRPYmplY3RCeU5hbWUob2JqZWN0RW50aXR5LnNjZW5lTmFtZSkucG9zaXRpb25cclxuICAgIGxldCBuZXdDYW1lcmEgPSBzY2VuZS5nZXRPYmplY3RCeU5hbWUoY2FtZXJhT2JqZWN0U2NlbmVOYW1lKVxyXG4gICAgLy8gbGV0IG5ld0NhbWVyYVBvc2l0aW9uID0gc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGNhbWVyYU9iamVjdFNjZW5lTmFtZSkucG9zaXRpb25cclxuICAgIC8vIGxldCBuZXdDb250cm9sc0NhbWVyYVBvc2l0aW9uID0gc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGNhbWVyYU9iamVjdFNjZW5lTmFtZSkucG9zaXRpb25cclxuICAgIC8vIGxldCBuZXdDYW1lcmFDb250cm9sc1Bvc2l0aW9uID0gc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKGNhbWVyYU9iamVjdFNjZW5lTmFtZSkuY29udHJvbHMub3JiaXRUYXJnZXQucG9zaXRpb25cclxuXHJcbiAgICAvLyBsZXQgYWFiYiA9IG5ldyB2M2QuQm94MygpLnNldEZyb21PYmplY3QoIG9iamVjdEVudGl0eU1lc2ggKTtcclxuICAgIC8vIGxldCBjZW50ZXIgPSBhYWJiLmdldENlbnRlciggbmV3IHYzZC5WZWN0b3IzKCkgKTtcclxuICAgIC8vIGxldCBzaXplID0gYWFiYi5nZXRTaXplKCBuZXcgdjNkLlZlY3RvcjMoKSApO1xyXG5cclxuICAgIC8vIGFuaW1hdGlvblxyXG4gICAgZ3NhcC50byhhcHAuY2FtZXJhLmNvbnRyb2xzLm9yYml0VGFyZ2V0LnBvc2l0aW9uLCB7XHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAuLi5uZXdDYW1lcmEuY29udHJvbHMub3JiaXRUYXJnZXQucG9zaXRpb24sXHJcbiAgICAgIC8vIHg6IG5ld0NhbWVyYVBvc2l0aW9uLngsXHJcbiAgICAgIC8vIHk6IG5ld0NhbWVyYVBvc2l0aW9uLnlcclxuICAgIH0pXHJcblxyXG4gICAgZ3NhcC50byhhcHAuY2FtZXJhLnBvc2l0aW9uLCB7XHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAuLi5uZXdDYW1lcmEucG9zaXRpb24sXHJcbiAgICAgIC8vIHo6IG5ld0NhbWVyYVBvc2l0aW9uLnogKyAxMFxyXG4gICAgICAvLyB4OiBjZW50ZXIueCxcclxuICAgICAgLy8geTogY2VudGVyLnksXHJcbiAgICAgIC8vIHo6IGNlbnRlci56ICsgc2l6ZS56LFxyXG4gICAgICAvLyBvblVwZGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vICAgYXBwLmNhbWVyYS5sb29rQXQoIG5ld0NhbWVyYVBvc2l0aW9uICk7XHJcbiAgICAgIC8vIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG4gICAgLy9cclxufTtcclxuXHJcbiJdfQ==