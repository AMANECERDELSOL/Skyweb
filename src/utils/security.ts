export const sanitizeInput = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

export const sanitizeHTML = (html: string): string => {
  const allowedTags = ['b', 'i', 'em', 'strong', 'p', 'br'];
  const div = document.createElement('div');
  div.innerHTML = html;

  const walk = (node: Node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      if (!allowedTags.includes(element.tagName.toLowerCase())) {
        element.replaceWith(document.createTextNode(element.textContent || ''));
        return;
      }
    }

    const children = Array.from(node.childNodes);
    children.forEach(child => walk(child));
  };

  walk(div);
  return div.innerHTML;
};

export const validateURL = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s-()]+$/;
  return phoneRegex.test(phone) && phone.length >= 10 && phone.length <= 20;
};

export const sanitizePhoneNumber = (phone: string): string => {
  return phone.replace(/[^\d+]/g, '');
};

export const preventClickJacking = () => {
  if (window.self !== window.top) {
    window.top!.location = window.self.location;
  }
};

export const secureExternalLink = (url: string): void => {
  if (validateURL(url)) {
    const link = document.createElement('a');
    link.href = url;
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    link.click();
  }
};

export const rateLimit = (() => {
  const requests = new Map<string, number[]>();
  const WINDOW_MS = 60000;
  const MAX_REQUESTS = 10;

  return (key: string): boolean => {
    const now = Date.now();
    const userRequests = requests.get(key) || [];
    const recentRequests = userRequests.filter(time => now - time < WINDOW_MS);

    if (recentRequests.length >= MAX_REQUESTS) {
      return false;
    }

    recentRequests.push(now);
    requests.set(key, recentRequests);
    return true;
  };
})();

export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken && token.length === 64;
};
