import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-root',
  template: `
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 class="mb-8 text-3xl font-bold text-center text-black">
          Angular Template
        </h2>
        <div
          class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-16"
        >
          <!-- Core Technologies -->
          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Replace with official Angular logo -->
              <svg
                class="w-16 h-16 text-red-600"
                viewBox="0 0 186 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M93 0L0 33.2L14.2 156.3L93 200L171.8 156.3L186 33.2L93 0Z"
                  fill="currentColor"
                />
                <path
                  d="M93 0V22.2V22.1V123.4V200L171.8 156.3L186 33.2L93 0Z"
                  fill-opacity="0.5"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Angular 18.2.0
            </h3>
            <p class="mt-4 text-base text-gray-600">
              Modern frontend framework for building scalable applications
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Replace with official RxJS logo -->
              <svg class="w-16 h-16 text-pink-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">RxJS</h3>
            <p class="mt-4 text-base text-gray-600">
              Reactive programming for async data streams
            </p>
          </div>

          <!-- Continue with other technologies -->
          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Replace with official TypeScript logo -->
              <svg class="w-16 h-16 text-blue-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">TypeScript</h3>
            <p class="mt-4 text-base text-gray-600">
              Strongly typed programming language
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Replace with official Tailwind logo -->
              <svg class="w-16 h-16 text-teal-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Tailwind CSS</h3>
            <p class="mt-4 text-base text-gray-600">
              Utility-first CSS framework
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Replace with official Nx logo -->
              <svg class="w-16 h-16 text-blue-700" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm-8.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Nx</h3>
            <p class="mt-4 text-base text-gray-600">Monorepo management tool</p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Replace with official Jest logo -->
              <svg class="w-16 h-16 text-red-500" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Jest</h3>
            <p class="mt-4 text-base text-gray-600">
              Testing framework for unit tests
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Replace with official Playwright logo -->
              <svg class="w-16 h-16 text-green-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
                />
                <path
                  fill="currentColor"
                  d="M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Playwright</h3>
            <p class="mt-4 text-base text-gray-600">
              End-to-end testing automation
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Replace with official ESLint logo -->
              <svg class="w-16 h-16 text-purple-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7.95 2L4 6v12l4 4h8l4-4V6l-4-4h-8zm8.05 16l-2 2h-4l-2-2V6l2-2h4l2 2v12z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">ESLint</h3>
            <p class="mt-4 text-base text-gray-600">
              Linting and code quality tool
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Zone.js logo -->
              <svg class="w-16 h-16 text-orange-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                />
                <path
                  fill="currentColor"
                  d="M12 17.25a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM12 9a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Zone.js</h3>
            <p class="mt-4 text-base text-gray-600">
              Manages asynchronous operations
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Angular CDK logo -->
              <svg class="w-16 h-16 text-red-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2L2 7l1.63 14.27L12 26l8.37-4.73L22 7l-10-5zm0 3.84L18.77 9L12 13.54L5.23 9L12 5.84z"
                />
                <path
                  fill="currentColor"
                  opacity="0.8"
                  d="M12 13.54v8.14l6.77-3.82l1.23-10.86L12 13.54z"
                />
                <path
                  fill="currentColor"
                  opacity="0.3"
                  d="M12 13.54L5.23 9L4 19.86L12 21.68V13.54z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Angular CDK</h3>
            <p class="mt-4 text-base text-gray-600">
              Component Development Kit
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Prettier logo -->
              <svg class="w-16 h-16 text-pink-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8.571 23.429A.571.571 0 0 1 8 24H2.286a.571.571 0 0 1 0-1.143H8c.316 0 .571.256.571.572zM8 20.57H6.857a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zm-5.714 1.143H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM8 18.286H2.286a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zM16 16H2.286a.571.571 0 0 0 0 1.143H16A.571.571 0 0 0 16 16zM2.286 14.857H16a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm19.428-3.428H2.286a.571.571 0 0 0 0 1.142h19.428a.571.571 0 0 0 0-1.142zm0-2.286H2.286a.571.571 0 0 0 0 1.143h19.428a.571.571 0 0 0 0-1.143zm0-2.286H2.286a.571.571 0 0 0 0 1.143h19.428a.571.571 0 0 0 0-1.143zm0-2.286H2.286a.571.571 0 0 0 0 1.143h19.428a.571.571 0 0 0 0-1.143zm0-2.285H2.286a.571.571 0 0 0 0 1.143h19.428a.571.571 0 0 0 0-1.143z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Prettier</h3>
            <p class="mt-4 text-base text-gray-600">
              Code formatter for consistency
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <!-- Nx Cloud logo -->
              <svg class="w-16 h-16 text-blue-700" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 3l9 5v8l-9 5-9-5V8l9-5zm0 2.5L5.5 9v6L12 18.5l6.5-3.5V9L12 5.5z"
                />
                <path
                  fill="currentColor"
                  opacity="0.5"
                  d="M12 7l-4 2v4l4 2 4-2V9l-4-2zm0 1.5l2 1v2l-2 1-2-1v-2l2-1z"
                />
                <path
                  fill="currentColor"
                  d="M12 1l10 5.5v11L12 23l-10-5.5v-11L12 1zm0 2.236L3.618 8.236v7.528L12 20.764l8.382-5v-7.528L12 3.236z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Nx Cloud</h3>
            <p class="mt-4 text-base text-gray-600">
              Distributed computing and caching
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AppComponent {
  title = 'angular-template';
}