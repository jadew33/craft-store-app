export function getDisplayName(category) {
    switch (category) {
        case 'keychain':
            return 'Keychains';
        case 'cross-stitch':
            return 'Cross Stitches';
        case 'crochet':
            return 'Amigurumis'
        default:
            return "";
    }
}

export function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
