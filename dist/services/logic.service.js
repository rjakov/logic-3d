export const LogicService = {
// async executeLogic(scene, app, appData, logic, menuLogicObject, apiUrl) {
//   if (logic.data && logic.data.actions && logic.data.actions.length) {
//     for (const action of logic.data.actions) {
//       await ActionService.executAction(
//         scene,
//         app,
//         appData,
//         logic,
//         action,
//         menuLogicObject,
//         apiUrl
//       );
//     }
//   }
// },
// async executeMainLogics(scene, app, appData, logics) {
//   for (const logic of logics) {
//     if (logic.data && logic.data.actions && logic.data.actions.length) {
//       for (const action of logic.data.actions) {
//         await ActionService.executAction(
//           scene,
//           app,
//           appData,
//           logic,
//           action
//         );
//       }
//     }
//   }
// }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9sb2dpYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRztBQUUxQiw0RUFBNEU7QUFDNUUseUVBQXlFO0FBQ3pFLGlEQUFpRDtBQUNqRCwwQ0FBMEM7QUFDMUMsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQiwyQkFBMkI7QUFDM0IsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWCxRQUFRO0FBQ1IsTUFBTTtBQUNOLEtBQUs7QUFFTCx5REFBeUQ7QUFDekQsa0NBQWtDO0FBQ2xDLDJFQUEyRTtBQUMzRSxtREFBbUQ7QUFDbkQsNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLFVBQVU7QUFDVixRQUFRO0FBQ1IsTUFBTTtBQUNOLElBQUk7Q0FDTCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4vYWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2ljU2VydmljZSA9IHtcclxuXHJcbiAgLy8gYXN5bmMgZXhlY3V0ZUxvZ2ljKHNjZW5lLCBhcHAsIGFwcERhdGEsIGxvZ2ljLCBtZW51TG9naWNPYmplY3QsIGFwaVVybCkge1xyXG4gIC8vICAgaWYgKGxvZ2ljLmRhdGEgJiYgbG9naWMuZGF0YS5hY3Rpb25zICYmIGxvZ2ljLmRhdGEuYWN0aW9ucy5sZW5ndGgpIHtcclxuICAvLyAgICAgZm9yIChjb25zdCBhY3Rpb24gb2YgbG9naWMuZGF0YS5hY3Rpb25zKSB7XHJcbiAgLy8gICAgICAgYXdhaXQgQWN0aW9uU2VydmljZS5leGVjdXRBY3Rpb24oXHJcbiAgLy8gICAgICAgICBzY2VuZSxcclxuICAvLyAgICAgICAgIGFwcCxcclxuICAvLyAgICAgICAgIGFwcERhdGEsXHJcbiAgLy8gICAgICAgICBsb2dpYyxcclxuICAvLyAgICAgICAgIGFjdGlvbixcclxuICAvLyAgICAgICAgIG1lbnVMb2dpY09iamVjdCxcclxuICAvLyAgICAgICAgIGFwaVVybFxyXG4gIC8vICAgICAgICk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9LFxyXG4gIFxyXG4gIC8vIGFzeW5jIGV4ZWN1dGVNYWluTG9naWNzKHNjZW5lLCBhcHAsIGFwcERhdGEsIGxvZ2ljcykge1xyXG4gIC8vICAgZm9yIChjb25zdCBsb2dpYyBvZiBsb2dpY3MpIHtcclxuICAvLyAgICAgaWYgKGxvZ2ljLmRhdGEgJiYgbG9naWMuZGF0YS5hY3Rpb25zICYmIGxvZ2ljLmRhdGEuYWN0aW9ucy5sZW5ndGgpIHtcclxuICAvLyAgICAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBsb2dpYy5kYXRhLmFjdGlvbnMpIHtcclxuICAvLyAgICAgICAgIGF3YWl0IEFjdGlvblNlcnZpY2UuZXhlY3V0QWN0aW9uKFxyXG4gIC8vICAgICAgICAgICBzY2VuZSxcclxuICAvLyAgICAgICAgICAgYXBwLFxyXG4gIC8vICAgICAgICAgICBhcHBEYXRhLFxyXG4gIC8vICAgICAgICAgICBsb2dpYyxcclxuICAvLyAgICAgICAgICAgYWN0aW9uXHJcbiAgLy8gICAgICAgICApO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG4iXX0=