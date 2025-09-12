<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
    <v-row>
      <v-col
        md="1"
        cols="1"
        class="ml-n4 mr-4"
      >
        <div class="vertical-tab-navigation">
          <v-btn
            icon
            flat
            class="nav-arrow"
            @click="prevTab"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>

          <div class="dot-navigation">
            <div
              v-for="(_, index) in works"
              :key="index"
              :class="['nav-dot', { active: tab === `option-${index}` }]"
            />
          </div>

          <v-btn
            icon
            flat
            class="nav-arrow"
            @click="nextTab"
          >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-col>

      <v-col
        md="11"
        cols="12"
      >
        <v-window
          v-model="tab"
          class="pa-0 ma-0"
          direction="vertical"
        >
          <v-window-item
            v-for="(work, index) in works"
            :key="work.id"
            :value="`option-${index}`"
            :class="[
              'work-card',
              {
                'active-card': tab === `option-${works.indexOf(work)}`,
              },
            ]"
          >
            <div class="d-flex flex-column">
              <span class="h4 w-600">{{ work.company }}</span>
              <div class="p2 d-flex align-center justify-space-between">
                <span class="c-secondary">{{ work.position }}</span>

                <span class="c-secondary">{{ work.dateRange }}</span>
              </div>

              <span class="p2 mt-4">
                {{ work.description }}
              </span>
              <v-expand-transition>
                <div
                  v-if="work.showAchievements"
                  class="mt-4 d-flex flex-column"
                >
                  <span
                    v-for="(achievement, i) in work.achievements"
                    :key="i"
                    class="p2 mt-4 achievement-point"
                  >
                    {{ achievement }}
                  </span>
                </div>
              </v-expand-transition>
              <div class="d-flex justify-end">
                <v-btn
                  variant="text"
                  color="#48eed6"
                  size="small"
                  class="details-button"
                  @click="toggleDetails(work)"
                >
                  {{ work.showAchievements ? 'Hide Details' : 'Show Details' }}
                </v-btn>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { http } from '@/plugins/http';

  const tab = ref('option-0');

  const works = ref([]);

  onMounted(async () => {
    await fetchExperiences();
  });

  const fetchExperiences = async () => {
    try {
      const { data } = await http.get('/experiences/all');
      works.value = data.experiences.map((work) => {
        return { ...work, showAchievements: false };
      });
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  const prevTab = () => {
    const currentIndex = works.value.findIndex((_, index) => `option-${index}` === tab.value);

    if (currentIndex > 0) {
      tab.value = `option-${currentIndex - 1}`;
    } else {
      tab.value = `option-${works.value.length - 1}`;
    }
  };

  const nextTab = () => {
    const currentIndex = works.value.findIndex((_, index) => `option-${index}` === tab.value);

    if (currentIndex < works.value.length - 1) {
      tab.value = `option-${currentIndex + 1}`;
    } else {
      tab.value = 'option-0';
    }
  };

  const toggleDetails = (work) => {
    work.showAchievements = !work.showAchievements;
    works.value.forEach((w) => {
      if (w !== work) w.showAchievements = false;
    });
  };
</script>

<style lang="scss" scoped>
  @use '@/styles/colors.scss' as *;

  .c-secondary {
    color: $text-inactive;
  }

  .vertical-tab-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: fit-content;

    .dot-navigation {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 10px 0;
      flex-grow: 1;
      justify-content: center;
      align-items: center;

      &::before {
        content: '';
        flex-grow: 1;
        border-left: 1px solid $cyan;
        width: 1px;
      }

      &::after {
        content: '';
        flex-grow: 1;
        border-left: 1px solid $cyan;
        width: 1px;
      }
    }

    .nav-arrow {
      background: $white-05;
      backdrop-filter: blur(5px);
      border: 1px solid $cyan;
      border-radius: 50%;
      margin: 10px 0;
      width: 44px;
      height: 44px;

      .v-icon {
        color: $white-7;
        font-size: 24px;
      }

      &:hover {
        background: $white-15;
        .v-icon {
          color: $white;
        }
      }
    }

    .nav-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $white-3;
      transition: background-color 0.3s ease;

      &.active {
        background-color: $cyan;
        box-shadow: 0 0 8px $white-5;
      }
    }
  }

  .work-card {
    position: relative;
    width: 100%;
    padding: 30px 0 30px 30px;
    border-radius: 20px;

    &.active-card {
      border: none;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 2px;
        background: linear-gradient(90deg, $cyan, $cyan-5, transparent);
        mask:
          linear-gradient($white 0 0) content-box,
          linear-gradient($white 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }
    }

    .achievement-point {
      position: relative;
      padding-left: 20px;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        top: 0;
        font-size: 24px;
        line-height: 1;
      }
    }

    .details-button {
      text-decoration: underline;
      text-transform: none;
      font-size: 16px;
      width: fit-content;
      padding: 0;
    }
  }
</style>
