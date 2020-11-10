function l10nFactory(localeCache) {
  return function l10nMiddleware(req, res, next) {
    if (!req.locale) {
      next();
      return;
    }

    req.messages = localeCache.getMessages(req.locale).messages;

    next();
  };
}

export { l10nFactory };
