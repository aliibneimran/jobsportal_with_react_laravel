// vite.config.js
import { defineConfig } from "file:///E:/php8.2.12/htdocs/Larevel_React/jobsportal_with_react_laravel/node_modules/vite/dist/node/index.js";
import laravel from "file:///E:/php8.2.12/htdocs/Larevel_React/jobsportal_with_react_laravel/node_modules/laravel-vite-plugin/dist/index.js";
import react from "file:///E:/php8.2.12/htdocs/Larevel_React/jobsportal_with_react_laravel/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { Inertia } from "file:///E:/php8.2.12/htdocs/Larevel_React/jobsportal_with_react_laravel/node_modules/@inertiajs/inertia/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.jsx",
      refresh: true
    }),
    react()
  ],
  resolve: {
    alias: {
      // '@inertiajs/inertia': require.resolve('@inertiajs/inertia'),
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxwaHA4LjIuMTJcXFxcaHRkb2NzXFxcXExhcmV2ZWxfUmVhY3RcXFxcam9ic3BvcnRhbF93aXRoX3JlYWN0X2xhcmF2ZWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHBocDguMi4xMlxcXFxodGRvY3NcXFxcTGFyZXZlbF9SZWFjdFxcXFxqb2JzcG9ydGFsX3dpdGhfcmVhY3RfbGFyYXZlbFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovcGhwOC4yLjEyL2h0ZG9jcy9MYXJldmVsX1JlYWN0L2pvYnNwb3J0YWxfd2l0aF9yZWFjdF9sYXJhdmVsL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGxhcmF2ZWwoe1xuICAgICAgICAgICAgaW5wdXQ6ICdyZXNvdXJjZXMvanMvYXBwLmpzeCcsXG4gICAgICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgcmVhY3QoKSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAvLyAnQGluZXJ0aWFqcy9pbmVydGlhJzogcmVxdWlyZS5yZXNvbHZlKCdAaW5lcnRpYWpzL2luZXJ0aWEnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVgsU0FBUyxvQkFBb0I7QUFDdFosT0FBTyxhQUFhO0FBQ3BCLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLElBQ2IsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQTtBQUFBLElBRVA7QUFBQSxFQUNGO0FBQ04sQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K