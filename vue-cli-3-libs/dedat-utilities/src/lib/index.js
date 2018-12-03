import HelloBox from './components/HelloBox'
import validators from './validators'

/**
 * Função de instalação do Plugin dedat-utilities.
 *
 * @param {Vue} vue Instância Vue
 * @param {*} options Opções do plugin. Sem aplicação no momento
 */
const install = (vue, _options) => {
  // Registrando globalmente os componentes
  // (num futuro, talvez seja interessante flexibilizar esta abordagem)
  vue.component(HelloBox.name, HelloBox);

  // Adicionando os validators à instância Vue
  vue.prototype.$dedat = {
    validators
  };
};

export default {
  install
}
