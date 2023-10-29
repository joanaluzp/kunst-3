<template>
  <div class="ticket-modal-wrapper">
    <div class="ticket-modal-close d-flex justify-content-end">
      <p
        class="description-text uppercase big text-right font-italic color-03"
        @click="handleCloseModal"
      >
        {{ $t("global.nav.menu.title_closed") }}
      </p>
    </div>
    <div class="ticket-modal-info">
      <div class="top">
        <p class="text-center uppercase description-title small red black">
          {{ $t("global.programme_id.top.btn_ticket") }}
        </p>
        <p
          class="text-center capitalize description-title font-bold-italic big"
        >
          {{ $t(`events.programme.${itemId}.title.main`) + " 🐩"}}
        </p>
      </div>
      <div class="bottom">
        <div class="ticket-description">
          <p class="font-fungal uppercase description-title big black">
           {{ $t('events.modal.info_1') }}
          </p>
          <p class="lowercase description-text font-italic black">
            {{ $t(`events.programme.${itemId}.price.presale`) }}
            {{ $t("global.programme_id.bottom.info_4.info_3") }}
          </p>
        </div>
        <div class="ticket-item-wrapper">
          <p class="uppercase d-inline description-title big black">{{ $t('events.modal.info_2') }}</p>
          <div class="d-inline-flex justify-content-start align-items-center">
            <i
              class="fa-solid fa-minus fa-xl"
              @click="decrementTicketRegular"
            ></i>
            <p class="uppercase d-inline description-text big black">
              {{ ticketRegular }}
            </p>
            <i
              class="fa-solid fa-plus fa-xl"
              @click="incrementTicketRegular"
            ></i>
          </div>
        </div>
        <div class="ticket-item-wrapper">
          <p class="uppercase d-inline description-title big black">
            {{ $t('events.modal.info_3') }}
          </p>
          <div class="d-inline-flex justify-content-start align-items-center">
            <i
              class="fa-solid fa-minus fa-xl"
              @click="decrementTicketDiscounted"
            ></i>
            <p class="uppercase d-inline description-text big black">
              {{ ticketDiscounted }}
            </p>
            <i
              class="fa-solid fa-plus fa-xl"
              @click="incrementTicketDiscounted"
            ></i>
          </div>
        </div>
        <div class="ticket-item-total">
          <p class="lowercase description-text text-center black">
            {{ $t('events.modal.info_4') }}: {{ total }} €
          </p>
        </div>
        <form class="form">
          <div class="input-wrapper big">
            <input type="text" :placeholder="$t('events.modal.form.name')" />
          </div>
          <div class="input-wrapper big">
            <input type="email" :placeholder="$t('events.modal.form.email')" />
          </div>
          <div class="input-wrapper big">
            <input type="num" maxlength="19" :placeholder="$t('events.modal.form.card_number')" />
          </div>
          <div
            class="d-flex justify-content-between align-items-center flex-wrap"
          >
            <div class="input-wrapper small">
              <input type="num" maxlength="2" :placeholder="$t('events.modal.form.month')" />
            </div>
            <div class="input-wrapper small">
              <input type="num" maxlength="2" :placeholder="$t('events.modal.form.year')" />
            </div>
            <div class="input-wrapper small">
              <input type="password" maxlength="3" :placeholder="$t('events.modal.form.cvc')" />
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button
              type="submit"
              class="ticket-modal-submit description-title capitalize font-bold-italic d-inline"
            >
            {{ $t('events.modal.info_5') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
const ticketRegular = ref(0);
const ticketDiscounted = ref(0);
const { t } = useI18n();
const props = defineProps({
  modalOpen: {
    type: Boolean,
    required: true,
  },
  itemId: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["handleCloseModal"]);
const handleCloseModal = () => {
  emit("handleCloseModal");
};
const total = computed(() => {
  return ticketRegular.value * 8 + ticketDiscounted.value * 5;
});
const incrementTicketRegular = () => {
  ticketRegular.value++;
};
const incrementTicketDiscounted = () => {
  ticketDiscounted.value++;
};
const decrementTicketRegular = () => {
  if (ticketRegular.value > 0) {
    ticketRegular.value--;
  }
};
const decrementTicketDiscounted = () => {
  if (ticketDiscounted.value > 0) {
    ticketDiscounted.value--;
  }
};
</script>
