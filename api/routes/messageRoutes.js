module.exports = app => {
    const controller = app.controllers.messageController
  
    app.route('/api/v1/message')
      .get(controller.listMessages)
      .post(controller.saveMessage);

    app.route('/api/v1/message/:messageId')
      .delete(controller.deleteMessage)
      .put(controller.updateMessage)
  }